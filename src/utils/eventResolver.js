// src/utils/eventResolver.js

import { rollDice } from './diceRolls'; // Assuming rollDice is in diceRolls.js

/**
 * Rolls on a given event table and returns the matched event.
 *
 * @param {Array<Object>} eventTable An array of event objects, each with min, max, event, and optional modifiers.
 * @returns {Object|null} The matched event object, or null if no event is found.
 */
export function resolveEvent(eventTable) {
    if (!eventTable || !Array.isArray(eventTable)) {
        console.error("Invalid event table provided to resolveEvent.");
        return null;
    }

    // Roll a 1D100 to determine the event
    const roll = rollDice(100); // rollDice should return a number between 1 and max (inclusive)

    // Find the event entry that matches the roll
    const matchedEvent = eventTable.find(entry => roll >= entry.min && roll <= entry.max);

    if (matchedEvent) {
        console.log(`Rolled ${roll} on event table. Event: "${matchedEvent.event}"`);
        return matchedEvent;
    } else {
        console.warn(`No event found for roll ${roll} in the provided table.`);
        return null;
    }
}