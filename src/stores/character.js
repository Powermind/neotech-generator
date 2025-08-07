import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs (install if needed)

// Import your dice rolling helpers (if you moved them to utils/diceRolls.js)
import { rollDice, roll3D6, roll4D6DropLowest, rollDiceString } from '../utils/diceRolls';

// Import the refactored action logic
import { rollLifeEventLogic } from './characterActions/lifeEventActions'; 
import { rollUpbringing } from './characterActions/upbringingActions';

// Import career data
import backgroundCareers from '../gameData/careers/backgroundCareers';
import generalCareers from '../gameData/careers/generalCareers';

import {
  selectCareerLogic,
  applyCareerEffectsLogic,
  completeCurrentCareerStageAndAdvanceLogic
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
  secondary_attributes: [
    { name: 'Tur', value: 11, mods: [] },
    { name: 'Cool', value: 0, mods: [] },
    { name: 'Turordning', value: 0, mods: [] },
    { name: 'Mediastatus', value: 0, mods: [] },
    { name: 'Förflyttning', value: 10, mods: [] }
  ],
  skills: JSON.parse(JSON.stringify(skillsData)), // Deep copy to prevent shared references
  notes: '',
  lifeEvents: [],
  money: 0, // <-- NEW: Character's money
  promotions: [], // <-- NEW: Store promotions earned
  startkapital: [],
  hasRolledAdvantages: false,
  hasRolledDisadvantages: false,
  hasRolledBackground: false,
  hasDegree: false,

  // --- NEW CAREER TRACKING STATE ---
  currentCareerStage: 'background_selection', // <--- CHANGED HERE!
  careerHistory: [], // Stores objects { stage: 'background', careerId: 'bg-urban', name: 'Urban Upbringing' }
  careerPointsPool: 0, // Points for career-specific skills
  freeSkillPointsPool: 0, // Points for any skill
  stridsvanaSkillPointsPool: 0, // Points specifically for Stridsvana
  selectedCareerId: null, // The ID of the career currently being processed for the current stage
  currentCareerDetails: null, // Full details of the selected career for the current stage
  pendingSkillDistributions: [], // Events waiting for skill point distribution
  contacts: [],
  enemies: [],

  // --- NEW: Track initial points awarded ---
  initialCareerPointsAwarded: 0,
  initialFreeSkillPointsAwarded: 0,
  initialStridsvanaSkillPointsAwarded: 0,

  // --- Upbringing ---
  upbringing: '',
  socialClass: {},

  // --- Track Bribes ---
  // --- NEW: Bribing State ---
  pendingBribes: {}, // e.g., { 'STY': { type: 'kontakt', cost: 'Agent A' }, 'PER': { type: 'money', cost: 1000 } }
  
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
    totalStartkapital: (state) => {
      return state.current.startkapital.reduce((sum, event) => sum + event.amount, 0);
    },
    socialClass: (state) => {
      console.log(state.current.socialClass)
      return state.current.socialClass.socialClass
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
    getAttributeValue: (state) => (key) => {
      const attr = state.current.attributes.find(
          a => a.name === key || a.abbr === key
      );
      if (!attr) {
          console.warn(`Attribute "${key}" not found.`);
          return 0;
      }

      // Calculate the sum of modifiers. Ensure mod.value is treated as a number.
      const modsSum = attr.mods.reduce((sum, mod) => sum + (parseInt(mod.value) || 0), 0);

      // Convert attr.value to an integer before adding modsSum
      // If attr.value could be something like "20+2" as a literal string that needs evaluation,
      // a more complex parser would be needed. Assuming "20" is a string representing a number.
      const baseValue = parseInt(attr.value) || 0; // Use 0 if parsing fails

      return baseValue + modsSum;
    },
    getSkillValue: (state) => (skillName) => {
      const skillToUpdate = state.current.skills.find(skill => skill.name === skillName);
      if (skillToUpdate) {
        return skillToUpdate.value;
      } else {
        console.warn(`Skill with name "${skillName}" not found.`);
      }
    },
    cool: (state) => {
      const coolAttr = state.current.secondary_attributes.find(
        attr => attr.name === 'Cool'
      );
      const modsum = coolAttr?.mods?.reduce(
        (sum, mod) => sum + (mod.value || 0),
        0
      ) || 0;
      return coolAttr.value + modsum
    },
    tur: (state) => {
      const turAttr = state.current.secondary_attributes.find(
        attr => attr.name === 'Tur'
      );
      const modsum = turAttr?.mods?.reduce(
        (sum, mod) => sum + (mod.value || 0),
        0
      ) || 0;
      return turAttr.value + modsum
    },
    turordning: (state) => {
      const getAttr = state.getAttributeValue

      const turordningAttr = state.current.secondary_attributes.find(
        attr => attr.name === 'Turordning'
      );

      const modsum = turordningAttr?.mods?.reduce(
        (sum, mod) => sum + (mod.value || 0),
        0
      ) || 0;

      const rörlighet = getAttr('Rörlighet');
      const syn = getAttr('Syn');
      const cool = state.cool;

      const value = (rörlighet + syn) / 2 + cool + modsum;

      return Math.round(value);
    },
    mediastatus: (state) => {
      const msAttr = state.current.secondary_attributes.find(
        attr => attr.name === 'Mediastatus'
      );
      const modsum = msAttr?.mods?.reduce(
        (sum, mod) => sum + (mod.value || 0),
        0
      ) || 0;
      return msAttr.value + modsum
    },
    hasDegree: (state) => {
      return state.current.hasDegree
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
    setSocialClass(socialClassEntry) {
      this.current.socialClass = socialClassEntry
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
    setSkillEasy(skillName) {
      const skillToToggle = this.current.skills.find(skill => skill.name === skillName);
      if (skillToToggle) {
            this.toggleSkillEasy(skillName)
            if (skillToToggle.value < 10) {
              skillToToggle.value = 10
            }
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
    rerollAttributes() {
      // Roll primary attributes
      this.rollAllAttributes4D6DropLowest()

      // Roll secondary Attributes
      const getAttr = this.getAttributeValue
      const attr = this.current.secondary_attributes.find(a => a.name === 'Cool');
      if (attr) {
        const psy = getAttr('Psyke')
        const vil = getAttr('Vilja')
        const base = Math.round((psy + vil) / 5)
        console.log('Generated cool, base was ', base)
        attr.value = base + rollDiceString("2T6")
      }
    },
    rerollAttributesUnder10() {
      // Special genetic manipulation case
      this.current.attributes.forEach(attribute => {
        if (attribute.value < 10) {
          const rollResult = roll4D6DropLowest(); // Use the new helper function
          attribute.value = rollResult;
          console.log(`Rerolled ${attribute.name}: ${rollResult}`);
        }
      });
    },
    // --- REFACTORED ACTION: rollLifeEvent ---
    rollLifeEvent(tableName) {
      // Call the external logic function, passing 'this' (the store instance) and tableName
      rollLifeEventLogic(this, tableName);
    },

    // Action to set the selected career ID and details for the current stage
    selectCareer(careerId) {
      selectCareerLogic(this, careerId, backgroundCareers, generalCareers);
    },

    // NEW: Updated action to pass the bribe choice.
    applySelectedCareerEffects(bribedAttribute = null) {
      // Pass the bribed attribute to the core logic function.
      applyCareerEffectsLogic(this, bribedAttribute);
      const currentStage = this.current.currentCareerStage;
      if (currentStage.includes('_selection')) {
          this.current.currentCareerStage = currentStage.replace('_selection', '_skill_purchase');
          console.log(`Moved to skill purchase stage: ${this.current.currentCareerStage}`);
      } else {
          console.error(`Unexpected stage for applying effects: ${currentStage}. Force advancing to background_skill_purchase.`);
          this.current.currentCareerStage = 'background_skill_purchase';
      }
    },

    // --- NEW ACTION: Bribe a Characteristic Roll ---
    bribeCharacteristicRoll(attributeName, bribeType, cost) {
      if (bribeType === 'money') {
        const costAmount = parseInt(cost);
        if (this.current.money >= costAmount) {
          this.current.money -= costAmount;
          this.current.pendingBribes[attributeName] = { type: 'money', cost: costAmount };
          console.log(`Bribed ${attributeName} roll for ${costAmount} money.`);
        } else {
          console.warn('Not enough money to bribe this roll!');
        }
      } else if (bribeType === 'contact') {
        const contactIndex = this.current.contacts.findIndex(c => c.title === cost);
        if (contactIndex !== -1) {
          const usedContact = this.current.contacts[contactIndex];
          console.log(`Bribed ${attributeName} roll using contact: ${usedContact.title}`);
        } else {
          console.warn('Contact not found or already used for this roll.');
        }
      }
    },
    // Action to set the selected career ID and details for the current stage
    selectCareer(careerId) {
      selectCareerLogic(this, careerId, backgroundCareers, generalCareers);
    },
    // Action: Determine background on the background table randomly
    rollBackground() {
      rollUpbringing(this);
      
      this.selectCareer(this.current.socialClass.socialClass)

      // Startkapital
      const amountRoll = rollDiceString('Ob3T6')
      console.log(amountRoll)
      const amount = amountRoll * this.current.currentCareerDetails.startingCapital
      this.current.startkapital.push({ amount , description: "Social status"});

      // Apply bilmod
      // Find the current value of the attribute from the store's state
      const currentAttribute = this.current.attributes.find(attr => attr.name === 'Bildning');

      if (currentAttribute) {
        // Calculate the new value
        let bilAmount = this.current.currentCareerDetails.bilMod
        // If the amount is a string, roll the dice
          if (typeof bilAmount === 'string') {
            try {
              bilAmount = rollDiceString(bilAmount);
            } catch (error) {
              console.error(`Error rolling dice string "${bilAmount}":`, error);
              return;
            }
          }
        const newValue = currentAttribute.value + bilAmount;
        // Use the existing updateAttribute action from the store
        this.updateAttribute('Bildning', newValue);
        console.log(`  - Bildning changed by ${bilAmount} to ${newValue}`);

        // Genetics
        if (this.current.currentCareerDetails.genetics) {
          rollLifeEventLogic(this, 'genetics');
          rollLifeEventLogic(this, 'sideeffects');
        }
      } else {
        console.warn(`Modifier target attribute "${targetAttributeName}" not found.`);
      }

      this.current.hasRolledBackground = true;
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
