iimport { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs (install if needed)

// Default character structure (can be defined directly or imported)
const defaultCharacterState = () => ({
  id: uuidv4(), // Generate a new ID each time a new default is created
  name: 'New Hero',
  race: 'Human',
  class: 'Warrior',
  level: 1,
  experience: 0,
  attributes: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
  skills: {
    athletics: 0,
    acrobatics: 0,
    stealth: 0,
    perception: 0,
  },
  inventory: [],
  equipment: {
    head: null,
    body: null,
    weapon: null,
  },
  spells: [],
  notes: '',
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
      const attributes = state.current.attributes;
      return Object.values(attributes).reduce((sum, val) => sum + val, 0);
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
    updateAttribute(attributeName, value) {
      // Update nested attribute
      if (this.current.attributes.hasOwnProperty(attributeName)) {
        this.current.attributes[attributeName] = value;
      }
    },
    addInventoryItem(item) {
      this.current.inventory.push(item);
    },
    removeInventoryItem(itemName) {
      this.current.inventory = this.current.inventory.filter(item => item.name !== itemName);
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
    }
  },
});
