import { rollDice } from './diceRolls'; // Import your dice rolling utility

/**
 * Rolls 1D100 and finds the corresponding event in a given table.
 * @param {Array<Object>} eventTable - An array of event objects, each with min, max, and event properties.
 * Example: [{ min: 1, max: 10, event: "..." }]
 * @returns {Object|null} The event object that matches the roll, or null if no match (shouldn't happen with full table).
 */
export function resolveEvent(eventTable) {
  const roll = rollDice(100); // Roll 1D100
  console.log(`Rolled ${roll} on event table.`);

  // Find the event that matches the roll within its min/max range
  const foundEvent = eventTable.find(entry => roll >= entry.min && roll <= entry.max);

  if (!foundEvent) {
    console.warn(`No event found for roll ${roll} in the provided table.`);
    return { event: `Error: No event found for roll ${roll}.` }; // Fallback
  }

  // Return the event object, possibly with the roll number
  return {
      roll: roll,
      description: foundEvent.event
  };
}