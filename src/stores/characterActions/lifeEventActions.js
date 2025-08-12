// src/stores/characterActions/lifeEventActions.js

// Re-import the necessary utilities and tables that this action needs
import { resolveEvent } from '../../utils/eventResolver';
import { rollDiceString } from '../../utils/diceRolls';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs (install if needed)

// Import all individual career event tables explicitly OR import the whole module
import {
    hemlosBackgroundEvents,
    underklassenBackgroundEvents,
    medelklassenBackgroundEvents,
    overklassenBackgroundEvents,
    socialElitBackgroundEvents
} from '../../gameData/careers/backgroundEventTables';

import {
  affarsmanCareerEvents,
  arbetareCareerEvents,
  artistCareerEvents,
  foretagsmanCareerEvents,
  gangmedlemCareerEvents,
  gangsterCareerEvents,
  hackerCareerEvents,
  kriminellCareerEvents,
  mediaarbetareCareerEvents,
  officerCareerEvents,
  playboyCareerEvents,
  polisCareerEvents,
  rymdarbetareCareerEvents,
  sjukvardareCareerEvents,
  soldatCareerEvents,
  soloCareerEvents,
  teknikerCareerEvents,
  universitetetCareerEvents,
  hemlosCareerEvents,
  fangelseCareerEvents,
  arbetslosCareerEvents
} from '../../gameData/careers/careerEventTables';

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
    hemlosBackgroundEvents,
    underklassenBackgroundEvents,
    medelklassenBackgroundEvents,
    overklassenBackgroundEvents,
    socialElitBackgroundEvents,
    advantages: advantagesEvents,
    disadvantages: disadvantagesEvents,
    genetics,
    sideeffects,
    generalEvents,
    arbetareCareerEvents,
    artistCareerEvents,
    affarsmanCareerEvents,
    foretagsmanCareerEvents,
    gangmedlemCareerEvents,
    gangsterCareerEvents,
    hackerCareerEvents,
    kriminellCareerEvents,
    mediaarbetareCareerEvents,
    officerCareerEvents,
    playboyCareerEvents,
    polisCareerEvents,
    rymdarbetareCareerEvents,
    sjukvardareCareerEvents,
    soldatCareerEvents,
    soloCareerEvents,
    teknikerCareerEvents,
    universitetetCareerEvents,
    hemlosCareerEvents,
    fangelseCareerEvents,
    arbetslosCareerEvents
    // Add more tables here as you create them for other careers/stages
};

/**
 * Applies all modifiers from a life event to the character store.
 *
 * @param {object} store The Pinia store instance.
 * @param {object} eventResult The event object, including modifiers.
 * @param {boolean} redirect A flag to indicate if this is a redirected roll.
 */
export function applyModifiersLogic(store, eventResult, redirect = false) {
  let shouldStoreEvent = true;

  if (eventResult.modifiers && Array.isArray(eventResult.modifiers)) {
    console.log(`Applying modifiers for event: "${eventResult.description}"`);
    eventResult.modifiers.forEach(modifier => {
      if (modifier.type === 'attribute') {
        const targetAttributeName = modifier.target;
        let amount = modifier.amount;

        if (typeof amount === 'string') {
          try {
            amount = rollDiceString(amount);
          } catch (error) {
            console.error(`Error rolling dice string "${modifier.amount}":`, error);
            return;
          }
        }
        const currentAttribute = store.current.attributes.find(attr => (attr.name === targetAttributeName || attr.abbr === targetAttributeName) );

        if (currentAttribute) {
          store.updateAttribute(targetAttributeName, amount);
          console.log(`  - ${targetAttributeName} changed by ${amount}`);
        } else {
          console.warn(`Modifier target attribute "${targetAttributeName}" not found.`);
        }
      } else if (modifier.type === 'skill_distribution') {
        console.log('Logged skill distribution');
        const pointsRolled = rollDiceString(modifier.diceFormula);
  
        store.current.pendingSkillDistributions.push({
          id: uuidv4(),
          eventDescription: eventResult.description,
          pointsTotal: pointsRolled,
          pointsRemaining: pointsRolled,
          allowedSkills: modifier.allowedSkills,
          description: modifier.description,
          completed: false
        });
        console.log(store.current.pendingSkillDistributions);
      } else if (modifier.type === 'redirect') {
        rollLifeEventLogic(store, modifier.table, true);
        shouldStoreEvent = false;
      } else if (modifier.type === 'prison') {
        store.current.prisonTerm = true;
      } else if (modifier.type === 'kontakt') {
        const resources = rollDiceString(modifier.resources);
        let contactTitle;

        if (Array.isArray(modifier.title)) {
          const randomIndex = Math.floor(Math.random() * modifier.title.length);
          contactTitle = modifier.title[randomIndex];
          console.log(`Randomly selected contact title: ${contactTitle}`);
        } else {
          contactTitle = modifier.title;
        }
        store.current.contacts.push({ title: contactTitle, resources });
      } else if (modifier.type === 'fiende') {
        const resources = rollDiceString(modifier.resources);
        let contactTitle;

        if (Array.isArray(modifier.title)) {
          const randomIndex = Math.floor(Math.random() * modifier.title.length);
          contactTitle = modifier.title[randomIndex];
          console.log(`Randomly selected enemy title: ${contactTitle}`);
        } else {
          contactTitle = modifier.title;
        }
        store.current.enemies.push({ title: contactTitle, resources });
      } else if (modifier.type === 'startkapital') {
        if (modifier.reset) {
          store.current.resetStartkapital
        } else {
          if (modifier.diceFormula) {
            const amount = rollDiceString(modifier.diceFormula) * modifier.multiplier;
            store.current.startkapital.push({ amount, description: modifier.title });
            console.log(`Logged startkapital: ${modifier.diceFormula}, ${amount}`);
          } else {
            store.current.startkapitalMultiplier += modifier.multiplier;
          }
        }
      } else if (modifier.type === 'reroll10') {
        console.log('Logged genetic reroll all under 10');
        store.rerollAttributesUnder10();
      } else if (modifier.type === 'lattlard') {
        console.log('Logged lättlärd');
        const skill = modifier.skill;
        store.setSkillEasy(skill);
      } else if (modifier.type === 'secondary_attribute') {
        console.log('Logged secondary attribute');
        const targetAttribute = modifier.name;
        const value = modifier.modifier;

        let calculatedValue;
        if (typeof value === 'string') {
          if (typeof rollDiceString === 'function') {
            calculatedValue = rollDiceString(value);
            console.log(`Rolled formula "${value}", result: ${calculatedValue}`);
          } else {
            console.error("Error: rollDiceFormula function is not defined. Cannot parse string value.");
            calculatedValue = 0;
          }
        } else if (typeof value === 'number') {
          calculatedValue = value;
          console.log(`Applying integer value: ${calculatedValue}`);
        } else {
          console.warn(`Modifier value for "${targetAttribute}" has an unexpected type: ${typeof value}. Defaulting to 0.`);
          calculatedValue = 0;
        }

        const currentAttribute = store.current.secondary_attributes.find(attr => attr.name === targetAttribute);

        if (currentAttribute) {
          currentAttribute.mods.push({ description: eventResult.description, value: calculatedValue });
          console.log(`Added modifier to ${targetAttribute}: ${eventResult.description}, value: ${calculatedValue}`);
        } else {
          console.error(`Secondary attribute "${targetAttribute}" not found in store.current.secondary_attributes.`);
        }
      }
    });
  }
  
  if (redirect) {
    eventResult.description = "(Omdirigerad) " + eventResult.description
  }

  if (shouldStoreEvent) {
    store.current.lifeEvents.push(eventResult);
  }
}

/**
 * Handles the logic for rolling a life event from a specified table.
 *
 * @param {object} store The Pinia store instance.
 * @param {string} tableName The name of the table to roll on (e.g., 'childhood').
 * @param {boolean} redirect A flag to indicate if this is a redirected roll.
 */
export function rollLifeEventLogic(store, tableName, redirect = false) {
  const table = lifeEventTables[tableName];
  if (!table) {
    console.error(`Life event table "${tableName}" not found.`);
    return;
  }

  const eventResult = resolveEvent(table);
  console.log('Event result', eventResult);
  
  if (eventResult) {
    applyModifiersLogic(store, eventResult, redirect);
  }
}
