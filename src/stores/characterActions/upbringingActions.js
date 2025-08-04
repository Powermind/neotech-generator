// src/stores/characterActions/upbringingActions.js

// Re-import the necessary utilities and tables that this action needs
import { rollDice } from '../../utils/diceRolls';
import {
    upbringing,
    odemarken,
    landsbygden,
    fororten,
    storstadsslummen,
    foretagsdistriktet,
    rymden,
} from '../../gameData/backgroundEnvironment.js'; // <-- Import individual tables


export function rollUpbringing(store) {
    // Roll a 1D100 to determine the event
    const roll = rollDice(100); // rollDice should return a number between 1 and max (inclusive)

    // Find the event entry that matches the roll
    const matchedEntry = upbringing.find(entry => roll >= entry.min && roll <= entry.max);
    console.log(`Rolled ${roll} on upbringing table. Upbringing: "${matchedEntry.description}"`);

    if (matchedEntry) {
        // Store info in character sheet
        store.current.upbringing = matchedEntry.description
        const newTable = matchedEntry.table
        const environmentTables = {
            odemarken: odemarken,
            landsbygden: landsbygden,
            fororten: fororten,
            storstadsslummen: storstadsslummen,
            foretagsdistriktet: foretagsdistriktet, // Corrected typo
            rymden: rymden,
        };

        const socialTable = environmentTables[newTable];
        const newRoll = rollDice(100); // rollDice should return a number between 1 and max (inclusive)

        const socialClassEntry = socialTable.find(entry => newRoll >= entry.min && newRoll <= entry.max);

        console.log(`Rolled ${newRoll} on social class table. Social class: "${socialClassEntry.socialClass}"`);
        store.setSocialClass(socialClassEntry)
        console.log('Social class set to object', socialClassEntry)
        console.log('Social object:', store.socialClass)
        return;
    } else {
        console.warn(`No event found for roll ${roll} in the provided table.`);
        return null;
    }
}
