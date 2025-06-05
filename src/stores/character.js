import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs (install if needed)

// Import your dice rolling helpers (if you moved them to utils/diceRolls.js)
import { rollDice, roll3D6, roll4D6DropLowest } from '../utils/diceRolls';

// Import the refactored action logic
import { rollLifeEventLogic } from './characterActions/lifeEventActions'; // <--- NEW IMPORT


// Import career data
import backgroundCareers from '../gameData/careers/backgroundCareers';
import generalCareers from '../gameData/careers/generalCareers';

import {
  selectCareerLogic,
  applyCareerEffectsLogic, // <--- NEW IMPORT
  completeCurrentCareerStageAndAdvanceLogic // <--- NEW IMPORT
} from './characterActions/careerActions';

import skillsData from '../gameData/skills'; // <-- NEW: Import your skills data

// Default character structure (can be defined directly or imported)
const defaultCharacterState = () => ({
  id: uuidv4(), // Generate a new ID each time a new default is created
  name: 'New Hero',
  age: 0,
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
  skills: JSON.parse(JSON.stringify(skillsData)), // Deep copy to prevent shared references
  notes: '',
  lifeEvents: [],
  money: 0, // <-- NEW: Character's money
  promotions: [], // <-- NEW: Store promotions earned

  // --- NEW CAREER TRACKING STATE ---
  currentCareerStage: 'background_selection', // <--- CHANGED HERE!
  careerHistory: [], // Stores objects { stage: 'background', careerId: 'bg-urban', name: 'Urban Upbringing' }
  careerPointsPool: 0, // Points for career-specific skills
  freeSkillPointsPool: 0, // Points for any skill
  stridsvanaSkillPointsPool: 0, // Points specifically for Stridsvana
  selectedCareerId: null, // The ID of the career currently being processed for the current stage
  currentCareerDetails: null, // Full details of the selected career for the current stage
  pendingSkillDistributions: [], // Events waiting for skill point distribution
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
    // NEW: Getters for skills if needed
    easySkills: (state) => {
        return state.current.skills.filter(skill => skill.easy);
    },
    // NEW GETTER: Filter for skills that are currently buyable
    buyableSkills: (state) => {
        return state.current.skills.filter(skill => skill.buyable);
    },
    sortedSkills: (state) => {
        // Sort skills alphabetically by name for display
        return [...state.current.skills].sort((a, b) => a.name.localeCompare(b.name));
    },
    // --- NEW GETTERS for career data ---
    // Returns all background careers
    availableBackgroundCareers: () => backgroundCareers,

    // Returns general careers filtered by character restrictions
    availableGeneralCareers: (state) => {
      return generalCareers.filter(career => {
        if (career.restrictions && career.restrictions.length > 0) {
          return career.restrictions.every(restriction => {
            if (restriction.type === 'min_attribute') {
              const charAttribute = state.current.attributes.find(attr => attr.name === restriction.attribute);
              return charAttribute && charAttribute.value >= restriction.value;
            }
            // Add other restriction types here as needed (e.g., 'max_attribute', 'has_skill', etc.)
            return true; // If restriction type is unknown, assume it passes
          });
        }
        return true; // No restrictions, so it's available
      });
    },

    // Getter to get the list of careers relevant for the current stage
    careersForCurrentStage: (state) => {
      // This getter now needs to understand the new stage names like '_selection'
      if (state.current.currentCareerStage.includes('_selection')) {
        if (state.current.currentCareerStage === 'background_selection') {
          return backgroundCareers;
        } else if (['career1_selection', 'career2_selection', 'career3_selection'].includes(state.current.currentCareerStage)) {
          return generalCareers;
        }
      }
      return []; // Return empty array if not in a selection stage
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
    // --- NEW ACTION: Set a skill's buyable status ---
    setSkillBuyable(skillName, isBuyable) {
        const skillToUpdate = this.current.skills.find(skill => skill.name === skillName);
        if (skillToUpdate) {
            skillToUpdate.buyable = isBuyable;
        } else {
            console.warn(`Skill with name "${skillName}" not found.`);
        }
    },
    // NEW ACTION: Update a skill's value
    updateSkill(skillName, newValue) {
      const skillToUpdate = this.current.skills.find(skill => skill.name === skillName);
      if (skillToUpdate) {
        skillToUpdate.value = newValue;
      } else {
        console.warn(`Skill with name "${skillName}" not found.`);
      }
    },
    // NEW ACTION: Toggle a skill's easy status
    toggleSkillEasy(skillName) {
        const skillToToggle = this.current.skills.find(skill => skill.name === skillName);
        if (skillToToggle) {
            skillToToggle.easy = !skillToToggle.easy;
        } else {
            console.warn(`Skill with name "${skillName}" not found.`);
        }
    },
    calculateSkillAdvancementCost(currentSkillValue, levelsToAdvance) {
        let cost = 0;
        if (currentSkillValue < 5) {
          return 2;
        } else if (currentSkillValue < 10) {
          return 1;
        } else {
          return 2;
        }
        return Infinity
    },
    calculateSkillReductionCost(currentSkillValue, levelsToAdvance) {
        let cost = 0;
        if (currentSkillValue === 5) {
          return 2;
        } else if (currentSkillValue > 10) {
          return 2;
        } else if (currentSkillValue > 0) {
          return 1;
        }
        return 0
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

    // --- NEW CAREER ACTIONS ---

    // Action to set the selected career ID and details for the current stage
    selectCareer(careerId) {
      selectCareerLogic(this, careerId, backgroundCareers, generalCareers);
    },

    // NEW Action: Apply effects of the selected career and move to skill purchase phase
    // This replaces the first part of the old advanceCareerStage.
    applySelectedCareerEffects() {
      // This 'this' is the store instance
      applyCareerEffectsLogic(this);
      // After applying effects, move to the skill purchase phase for the current career.
      // This assumes currentCareerStage is like 'background_selection' or 'career1_selection'
      const currentStage = this.current.currentCareerStage;
      if (currentStage.includes('_selection')) {
          this.current.currentCareerStage = currentStage.replace('_selection', '_skill_purchase');
          console.log(`Moved to skill purchase stage: ${this.current.currentCareerStage}`);
      } else {
          console.error(`Unexpected stage for applying effects: ${currentStage}. Force advancing to background_skill_purchase.`);
          // Fallback if currentStage is not a '_selection' stage for some reason
          this.current.currentCareerStage = 'background_skill_purchase';
      }
    },

    // NEW Action: Complete the current career stage (after skill spending) and advance to the next selection phase
    completeCurrentCareerStageAndAdvance() {
      completeCurrentCareerStageAndAdvanceLogic(this);
    },

    spendSkillPoints(skillName, pointsToSpend, type="career") {
      let pool
      if (type == "career") {
        pool = this.current.careerPointsPool
      } else if (type === "free") {
        pool = this.current.freeSkillPointsPool
      } else if (type === "stridsvana") {
        pool = this.current.stridsvanaSkillPointsPool
      }
      if (pool >= pointsToSpend) {
        const skill = this.current.skills.find(s => s.name === skillName);
        if (skill) {
          if (skill.value === 0) {
            skill.value = 5
          } else {
            skill.value += 1
          }
          //skill.value += pointsToSpend;
          if (type === 'career') {
            this.current.careerPointsPool -= pointsToSpend; 
          }
          if (type === 'free') {
            this.current.freeSkillPointsPool -= pointsToSpend; 
          }
          if (type === 'stridsvana') {
            this.current.stridsvanaSkillPointsPool -= pointsToSpend; 
          }
        } else {
            console.warn(`Skill "${skillName}" not found for spending career points.`);
        }
      } else {
        console.warn('Not enough career skill points!');
      }
    },

    returnSkillPoints(skillName, pointsToSpend, type="career") {
      let pool
      if (type == "career") {
        pool = this.current.careerPointsPool
      } else if (type === "free") {
        pool = this.current.freeSkillPointsPool
      } else if (type === "stridsvana") {
        pool = this.current.stridsvanaSkillPointsPool
      }
      const skill = this.current.skills.find(s => s.name === skillName);
      if (skill) {
        if (skill.value === 5) {
          skill.value = 0
        } else {
          skill.value -= 1
        }
        if (type === 'career') {
          this.current.careerPointsPool += pointsToSpend; 
        }
        if (type === 'free') {
          this.current.freeSkillPointsPool += pointsToSpend; 
        }
        if (type === 'stridsvana') {
          this.current.stridsvanaSkillPointsPool += pointsToSpend; 
        }
      } else {
          console.warn(`Skill "${skillName}" not found for returning career points.`);
      }
    },


    // Action to handle spending career points on skills
    spendCareerSkillPoints(skillName, pointsToSpend) {
      if (this.current.careerPointsPool >= pointsToSpend) {
        const skill = this.current.skills.find(s => s.name === skillName);
        if (skill) {
          if (skill.value === 0) {
            skill.value = 5
          } else {
            skill.value += 1
          }
          //skill.value += pointsToSpend;
          this.current.careerPointsPool -= pointsToSpend;
        } else {
            console.warn(`Skill "${skillName}" not found for spending career points.`);
        }
      } else {
        console.warn('Not enough career skill points!');
      }
    },
    // Action to handle spending free points on skills
    spendFreeSkillPoints(skillName, pointsToSpend) {
        if (this.current.freeSkillPointsPool >= pointsToSpend) {
            const skill = this.current.skills.find(s => s.name === skillName);
            if (skill) {
                skill.value += pointsToSpend;
                this.current.freeSkillPointsPool -= pointsToSpend;
            } else {
                console.warn(`Skill "${skillName}" not found for spending free points.`);
            }
        } else {
            console.warn('Not enough free skill points!');
        }
    },
    // Action to handle spending Stridsvana points
    spendStridsvanaSkillPoints(pointsToSpend) {
        if (this.current.stridsvanaSkillPointsPool >= pointsToSpend) {
            const stridsvanaSkill = this.current.skills.find(s => s.name === 'Stridsvana');
            if (stridsvanaSkill) {
                stridsvanaSkill.value += pointsToSpend;
                this.current.stridsvanaSkillPointsPool -= pointsToSpend;
            } else {
                console.warn('Skill "Stridsvana" not found for spending Stridsvana points.');
            }
        } else {
            console.warn('Not enough Stridsvana skill points!');
        }
    },

    createSkillDistribution(eventDescription, diceFormula, allowedSkills) {
  // Roll the dice for points using your existing rollDice function
  const pointsRolled = rollDice(diceFormula);
  
  // Create the distribution object
  const distribution = {
    id: uuidv4(),
    eventDescription: eventDescription,
    pointsTotal: pointsRolled,
    pointsRemaining: pointsRolled,
    allowedSkills: allowedSkills,
    distributedPoints: {}, // Tracks points distributed to each skill
    completed: false
  };
  
  // Add to pending distributions
  this.current.pendingSkillDistributions.push(distribution);
  
  console.log(`Created skill distribution: ${pointsRolled} points for skills: ${allowedSkills.join(', ')}`);
},

  },
});
