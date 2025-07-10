// src/stores/characterActions/lifeEventActions.js

// Re-import the necessary utilities and tables that this action needs
import { resolveEvent } from '../../utils/eventResolver';
import { rollDiceString } from '../../utils/diceRolls';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs (install if needed)

// NEW: Import all individual career event tables explicitly OR import the whole module
import {
    hemlosBackgroundEvents,
    underklassenBackgroundEvents,
    medelklassenBackgroundEvents,
    overklassenBackgroundEvents,
    socialElitBackgroundEvents
} from '../../gameData/careers/backgroundEventTables'; // <-- Import individual tables

import {
  advantagesEvents,
  disadvantagesEvents
} from '../../gameData/specialAbilities'

import {
  genetics,
  sideeffects
} from '../../gameData/lifeEvents/genetics'

import generalEvents from '../../gameData/lifeEvents/generalEvents'

const lifeEventTables = {
    hemlosBackgroundEvents: hemlosBackgroundEvents, // <-- Add this
    underklassenBackgroundEvents: underklassenBackgroundEvents, // <-- Add this
    medelklassenBackgroundEvents: medelklassenBackgroundEvents, // <-- Add this
    overklassenBackgroundEvents: overklassenBackgroundEvents, // <-- Add this
    socialElitBackgroundEvents: socialElitBackgroundEvents, // <-- Add this
    advantages: advantagesEvents,
    disadvantages: disadvantagesEvents,
    genetics: genetics,
    sideeffects: sideeffects,
    generalEvents: generalEvents
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
export function rollLifeEventLogic(store, tableName, redirect = false) {
  const table = lifeEventTables[tableName];
  if (!table) {
    console.error(`Life event table "${tableName}" not found.`);
    return;
  }

  const eventResult = resolveEvent(table); // Get the full event object, including modifiers
  console.log('Event result',eventResult)
  if (eventResult) {
    // Apply modifiers
    let storeResult = true
    if (eventResult.modifiers && Array.isArray(eventResult.modifiers)) {
      console.log(`Applying modifiers for event: "${eventResult.description}"`);
      eventResult.modifiers.forEach(modifier => {
        if (modifier.type === 'attribute') {
          const targetAttributeName = modifier.target;
          let amount = modifier.amount;

          // If the amount is a string, roll the dice
          if (typeof amount === 'string') {
            try {
              amount = rollDiceString(amount);
            } catch (error) {
              console.error(`Error rolling dice string "${modifier.amount}":`, error);
              return;
            }
          }
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
        } else if (modifier.type === 'redirect') {
          // Roll on new table
          rollLifeEventLogic(store, modifier.table, true)
          // Do not log result
          storeResult = false
        } else if (modifier.type === 'kontakt') {
          // Roll the dice for points
          console.log('Logged kontakt')
          const resources = rollDiceString(modifier.resources);
          store.current.contacts.push({ title: modifier.title, resources })
        } else if (modifier.type === 'startkapital') {
          console.log('Logged startkapital')
          const amount = rollDiceString(modifier.diceFormula) * modifier.multiplier
          store.current.startkapital.push({ amount, description: modifier.title })
        } else if (modifier.type === 'reroll10') {
          // Special genetic manipulation case
          console.log('Logged genetic reroll all under 10')
          store.rerollAttributesUnder10()
        } else if (modifier.type === 'lattlard') {
          console.log('Logged lättlärd')
          const skill = modifier.skill
          store.setSkillEasy(skill)
        } else if (modifier.type === 'secondary_attribute') {
          console.log('Logged secondary attribute');
          const targetAttribute = modifier.name;
          const value = modifier.value; // This is the original value from the modifier

          let calculatedValue; // This variable will hold the final integer value

          // Check if the value is a string (indicating a dice formula)
          if (typeof value === 'string') {
              // Call your rollDiceFormula function to get the integer result
              // Make sure rollDiceFormula is defined in your scope
              if (typeof rollDiceString === 'function') {
                  calculatedValue = rollDiceString(value);
                  console.log(`Rolled formula "${value}", result: ${calculatedValue}`);
              } else {
                  console.error("Error: rollDiceFormula function is not defined. Cannot parse string value.");
                  calculatedValue = 0; // Default to 0 or handle error appropriately
              }
          } else if (typeof value === 'number') {
              // If it's already an integer, use it as is
              calculatedValue = value;
              console.log(`Applying integer value: ${calculatedValue}`);
          } else {
              // Handle other unexpected types if necessary
              console.warn(`Modifier value for "${targetAttribute}" has an unexpected type: ${typeof value}. Defaulting to 0.`);
              calculatedValue = 0;
          }

          const currentAttribute = store.current.secondary_attributes.find(attr => attr.name === targetAttribute);

          if (currentAttribute) {
              // Push the modifier with the calculated integer value
              currentAttribute.mods.push({ description: eventResult.description, value: calculatedValue });
              console.log(`Added modifier to ${targetAttribute}: ${eventResult.description}, value: ${calculatedValue}`);
          } else {
              console.error(`Secondary attribute "${targetAttribute}" not found in store.current.secondary_attributes.`);
          }
        }
        // Add other modifier types here later (e.g., 'skill', 'inventory', etc.)
      });
    }
    if (redirect) {
      eventResult.description = "(Omdirigerad) " + eventResult.description
    }
    if (storeResult) {
      store.current.lifeEvents.push(eventResult); // Store the event with its description and roll
    }
  }
}