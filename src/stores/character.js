import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs (install if needed)

// Import your dice rolling helpers (if you moved them to utils/diceRolls.js)
import { rollDice, roll3D6, roll4D6DropLowest } from '../utils/diceRolls';

// Import the refactored action logic
import { rollLifeEventLogic } from './characterActions/lifeEventActions'; // <--- NEW IMPORT

// Default character structure (can be defined directly or imported)
const defaultCharacterState = () => ({
  id: uuidv4(), // Generate a new ID each time a new default is created
  name: 'New Hero',
  attributes: [
    { name: 'Styrka', abbr: 'STY', value: 0, mods: []},
    { name: 'Tålighet', abbr: 'TÅL', value: 0, mods: []},
    { name: 'Rörlighet', abbr: 'RÖR', value: 0, mods: []},
    { name: 'Personlighet', abbr: 'PER', value: 0, mods: []},
    { name: 'Psyke', abbr: 'PSY', value: 0, mods: []},
    { name: 'Vilja', abbr: 'VIL', value: 0, mods: []},
    { name: 'Bildning', abbr: 'BIL', value: 0, mods: []},
    { name: 'Syn', abbr: 'SYN', value: 0, mods: []},
    { name: 'Hörsel', abbr: 'HÖR', value: 0, mods: []}, 
  ],
  skills: {
    athletics: 0,
    acrobatics: 0,
    stealth: 0,
    perception: 0,
  },
  notes: '',
  lifeEvents: []
});

export const useCharacterStore = defineStore('character', {
  state: () => ({
    // Initialize your character with the default state
    current: defaultCharacterState(),
    characters: [], // If you plan to manage multiple saved characters
  }),
  getters: {
    // Getters are like computed properties for your store's state
    // They are reactive and recalculate when their dependencies change.
    totalAttributePoints: (state) => {
      return state.current.attributes.reduce((sum, attr) => sum + attr.value, 0);
    },
    isCharacterValid: (state) => {
      // Example validation logic
      return state.current.name.length > 0 && state.current.level > 0;
    },
  },
  actions: {
    // Actions are methods that can modify the state.
    // They can be asynchronous and contain business logic.

    updateCharacter(key, value) {
      // Basic update for top-level properties
      this.current[key] = value;
    },
    updateAttribute(attributeName, newValue) {
      const attributeToUpdate = this.current.attributes.find(attr => attr.name === attributeName);
      if (attributeToUpdate) {
        attributeToUpdate.value = newValue;
      } else {
        console.warn(`Attribute with name "${attributeName}" not found.`);
      }
    },
    resetCharacter() {
      // Reset the character to its default state
      this.current = defaultCharacterState();
    },
    saveCharacter(character) {
      // Example: add to a list of saved characters (you'd typically save to localStorage or backend)
      const existingIndex = this.characters.findIndex(c => c.id === character.id);
      if (existingIndex !== -1) {
        this.characters[existingIndex] = character; // Update existing
      } else {
        this.characters.push(character); // Add new
      }
      console.log('Character Saved:', character.name, character.id);
      // In a real app: localStorage.setItem('character_' + character.id, JSON.stringify(character));
    },
    loadCharacter(id) {
        // Example: Load from the `characters` array in the store
        const loadedChar = this.characters.find(c => c.id === id);
        if (loadedChar) {
            this.current = { ...loadedChar }; // Ensure reactivity by replacing the object
            console.log('Character Loaded:', loadedChar.name);
        } else {
            console.warn('Character not found with ID:', id);
        }
    },
   // --- MODIFIED ACTION: rollAllAttributes ---
    rollAllAttributes() {
      console.log('Rolling 3D6 for all attributes...');
      // Iterate directly over the 'attributes' array on the current character
      this.current.attributes.forEach(attribute => {
        const rollResult = roll3D6(); // Get a 3D6 roll
        attribute.value = rollResult; // Update the 'value' property of the attribute object directly
        console.log(`${attribute.name}: ${rollResult}`);
      });
      console.log('All attributes rolled!');
    },
    // --- NEW ACTION: Roll all attributes using 4d6 drop lowest ---
    rollAllAttributes4D6DropLowest() {
      console.log('Rolling 4D6 (drop lowest) for all attributes...');
      this.current.attributes.forEach(attribute => {
        const rollResult = roll4D6DropLowest(); // Use the new helper function
        attribute.value = rollResult;
        console.log(`${attribute.name}: ${rollResult}`);
      });
      console.log('All attributes (4D6 drop lowest) rolled!');
    },

    // --- REFACTORED ACTION: rollLifeEvent ---
    rollLifeEvent(tableName) {
      // Call the external logic function, passing 'this' (the store instance) and tableName
      rollLifeEventLogic(this, tableName);
    },
  },
});
