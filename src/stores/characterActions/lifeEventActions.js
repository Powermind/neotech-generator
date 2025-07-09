// src/stores/characterActions/lifeEventActions.js

// Re-import the necessary utilities and tables that this action needs
import { resolveEvent } from '../../utils/eventResolver';
import upbringingEvents from '../../gameData/lifeEvents/upbringingEvents';
import { rollDiceString } from '../../utils/diceRolls';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs (install if needed)

// NEW: Import all individual career event tables explicitly OR import the whole module
import {
    hemlosBackgroundEvents,
    ruralBackgroundEvents,
    academicBackgroundEvents,
    soldierCareerEvents,
    medicCareerEvents,
    scoutCareerEvents,
} from '../../gameData/careers/careerEventTables'; // <-- Import individual tables

import {
  advantagesEvents,
  disadvantagesEvents
} from '../../gameData/lifeEvents/upbringingEvents'

const lifeEventTables = {
    upbringing: upbringingEvents, // Keep your upbringing table if it's distinct
    hemlosBackgroundEvents: hemlosBackgroundEvents, // <-- Add this
    ruralBackgroundEvents: ruralBackgroundEvents, // <-- Add this
    academicBackgroundEvents: academicBackgroundEvents, // <-- Add this
    soldierCareerEvents: soldierCareerEvents, // <-- Add this
    medicCareerEvents: medicCareerEvents, // <-- Add this
    scoutCareerEvents: scoutCareerEvents, // <-- Add this
    advantages: advantagesEvents,
    disadvantages: disadvantagesEvents,
    // Add more tables here as you create them for other careers/stages
};

/**
 * Handles the logic for rolling a life event and applying its modifiers.
 * This function is designed to be called from a Pinia store action,
 * receiving the store instance as its first argument.
 *
 * @param {object} store The Pinia store instance (e.g., 'this' from the action)
 * @param {string} tableName The name of the table to roll on (e.g., 'childhood')
 */
export function rollLifeEventLogic(store, tableName) {
  const table = lifeEventTables[tableName];
  if (!table) {
    console.error(`Life event table "${tableName}" not found.`);
    return;
  }

  const eventResult = resolveEvent(table); // Get the full event object, including modifiers
  console.log('Event result',eventResult)
  if (eventResult) {
    store.current.lifeEvents.push(eventResult); // Store the event with its description and roll

    // Apply modifiers
    if (eventResult.modifiers && Array.isArray(eventResult.modifiers)) {
      console.log(`Applying modifiers for event: "${eventResult.description}"`);
      eventResult.modifiers.forEach(modifier => {
        if (modifier.type === 'attribute') {
          const targetAttributeName = modifier.target;
          const amount = modifier.amount;

          // Find the current value of the attribute from the store's state
          const currentAttribute = store.current.attributes.find(attr => attr.name === targetAttributeName);

          if (currentAttribute) {
            // Calculate the new value
            const newValue = currentAttribute.value + amount;
            // Use the existing updateAttribute action from the store
            store.updateAttribute(targetAttributeName, newValue);
            console.log(`  - ${targetAttributeName} changed by ${amount} to ${newValue}`);
          } else {
            console.warn(`Modifier target attribute "${targetAttributeName}" not found.`);
          }
        } else if (modifier.type === 'skill_distribution') {
          // Roll the dice for points
          console.log('Logged skill distribution')
          const pointsRolled = rollDiceString(modifier.diceFormula);
    
          // Add to pending distributions
          store.current.pendingSkillDistributions.push({
            id: uuidv4(),
            eventDescription: eventResult.description,
            pointsTotal: pointsRolled,
            pointsRemaining: pointsRolled,
            allowedSkills: modifier.allowedSkills,
            description: modifier.description,
            completed: false
          });
          console.log(store.current.pendingSkillDistributions)
        } else if (modifier.type === 'kontakt') {
          // Roll the dice for points
          console.log('Logged kontakt')
          const resources = rollDiceString(modifier.resources);
          store.current.contacts.push({ title: modifier.title, resources })
        } else if (modifier.type === 'startkapital') {
          console.log('Logged startkapital')
          const amount = rollDiceString(modifier.diceFormula) * modifier.multiplier
          store.current.startkapital.push({ amount, description: modifier.title })
        } else if (modifier.type === 'lattlard') {
          console.log('Logged lättlärd')
          const skill = modifier.skill
          store.setSkillEasy(skill)
        } else if (modifier.type === 'secondary_attribute') {
          console.log('Logged secondary attribute')
          const targetAttribute = modifier.name
          const value = modifier.value
          const currentAttribute = store.current.secondary_attributes.find(attr => attr.name === targetAttribute);
          currentAttribute.modifiers.push({description: eventResult.description, value })
        }
        // Add other modifier types here later (e.g., 'skill', 'inventory', etc.)
      });
    }
  }
}