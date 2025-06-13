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
    const matchedEntry = eventTable.find(entry => roll >= entry.min && roll <= entry.max);

    if (matchedEntry) {
        // Create a NEW object instance by spreading the matched entry
        // This prevents mutating the original object in your gameData tables.
        const eventResult = {
            ...matchedEntry, // Copy all properties from the found entry
            roll: roll,      // Add the specific roll result for this instance
            id: Date.now() + Math.random(), // Simple unique ID
            // or use uuid if you import it here
        };
        // Log the description property of the new object to see its content
        console.log(`Rolled ${roll} on event table. Event: "${eventResult.description}"`); // Corrected log message
        return eventResult; // Return the new, unique object
    } else {
        console.warn(`No event found for roll ${roll} in the provided table.`);
        return null;
    }
}