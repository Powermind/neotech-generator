<script setup>
import { useCharacterStore } from '../stores/character'; // 1. Import your store function

import AttributeBox from './AttributeBox.vue'
import LifeEventsGenerator from './LifeEventsGenerator.vue'; 
import EventSkillDistribution from './EventSkillDistribution.vue';
import SkillList from './SkillList.vue'; // <-- NEW: Import SkillList
import CareerPathStepper from './CareerPathStepper.vue'; // <-- NEW: Import CareerPathStepper

// 2. Instantiate the store
// This gives you access to all state, getters, and actions defined in your character store.
const characterStore = useCharacterStore();

// You can access state directly like:
// characterStore.current.name
// characterStore.current.attributes.strength

// You can access getters directly like:
// characterStore.totalAttributePoints

// You can call actions directly like:
// characterStore.updateCharacter('name', 'Gandalf');
// characterStore.updateAttribute('strength', 15);

// Example of a local reactive variable bound to a store property (useful for input fields)
// This pattern ensures the input field's v-model doesn't directly mutate the store state
// but instead calls an action to update it.
// You could also directly v-model="characterStore.current.name" for simple cases,
// but for complex objects or validation, explicit actions are better.
import { ref, watch } from 'vue'; // Import ref and watch
import { computed } from 'vue'

const characterNameInput = ref(characterStore.current.name);

// Watch for changes in the input field and update the store
watch(characterNameInput, (newValue) => {
  characterStore.updateCharacter('name', newValue);
});

// Watch for changes in the store's name and update the input field (e.g., after a reset/load)
watch(() => characterStore.current.name, (newNameInStore) => {
  characterNameInput.value = newNameInStore;
});


// Functions to handle user interactions and call store actions
const rerollAttributes= () => {
    characterStore.rerollAttributes()
}

let attributesLocked = ref(false)

const lockAttributes = () => {
  attributesLocked.value = true;
}

const resetCurrent = () => {
  characterStore.resetCharacter();
};

const saveCurrent = () => {
    // It's good practice to pass a copy of the state when saving,
    // especially if your saveCharacter action modifies the array of saved characters.
    characterStore.saveCharacter({ ...characterStore.current });
};

// --- NEW METHOD: Roll a Childhood Event ---
const handleRollChildhoodEvent = () => {
  characterStore.rollLifeEvent('upbringing');
};
const handleRollAdvantages = () => {
  characterStore.rollLifeEvent('advantages');
  characterStore.current.rolledAdvantages += 1;
};
const handleRollDisadvantages = () => {
  characterStore.rollLifeEvent('disadvantages');
  characterStore.current.rolledDisadvantages += 1;
};

const rerollButtonText = computed(() => {
  if (characterStore.getAttributeValue('STY') === 0) {
    return 'Slå grundegenskaper'
  } else {
    return 'Slå om grundegenskaper'
  }
});

const rolledOnce = computed(() =>{ return characterStore.getAttributeValue('STY') !== 0 });

const careerHistorySlots = computed(() => {
    const slots = [
        { stage: 'background', career: null },
        { stage: 'career1', career: null },
        { stage: 'career2', career: null },
        { stage: 'career3', career: null },
    ];
    characterStore.current.careerHistory.forEach(historyEntry => {
        const index = slots.findIndex(s => s.stage === historyEntry.stage);
        if (index !== -1) {
            slots[index].career = historyEntry;
        }
    });
    return slots;
});
</script>

<template>
  <div class="character-sheet">
    <div class="attribute-wrapper">
    <div class="primary-attribute-wrapper">
        <AttributeBox 
            v-for="(attribute, index) in characterStore.current.attributes"
            :key="attribute.name"
            :attribute="attribute"     
            :attribute-index="index"
        />
    </div>
    <div class="secondary-attributes-wrapper">
      <p>Turordning: {{ characterStore.turordning }}</p>
      <p>Cool: {{ characterStore.cool }}</p>
      <p>Tur: {{ characterStore.tur }}</p>
      <p>Startkapital: {{ characterStore.totalStartkapital }}</p>
      <p>Mediastatus: {{ characterStore.mediastatus }}</p>
    </div>
    </div>
    <div class="attribute-button-wrapper" v-if="!attributesLocked">
        <button @click="rerollAttributes" class="attribute-button">{{ rerollButtonText }}</button>
        <button @click="lockAttributes" class="attribute-button" v-if="rolledOnce">Lås grundegenskaper</button>
    </div>
    
    <div id="skillsSection"></div>

    <LifeEventsGenerator />

    <div class="life-event-roll-section" v-if="attributesLocked && characterStore.current.rolledAdvantages < 2">
        <button @click="handleRollAdvantages" class="roll-button roll-life-event">Slå en speciell fördel</button>
    </div>
    <div class="life-event-roll-section" v-if="characterStore.current.rolledAdvantages > 1 && characterStore.current.rolledDisadvantages < 2">
        <button @click="handleRollDisadvantages" class="roll-button roll-life-event">Slå en speciell nackdel</button>
    </div>

    <EventSkillDistribution />

    <CareerPathStepper />

    <div class="actions">
      <button @click="saveCurrent">Save Character</button>
      <button @click="resetCurrent">Reset Character</button>
    </div>

    <SkillList />
 
    <!-- NEW: Display Startkapital entries -->
    <div class="startkapital-summary">
      <h3>Startkapital Entries</h3>
      <div v-if="characterStore.current.startkapital.length === 0">
        <p>No startkapital entries yet.</p>
      </div>
      <div v-else>
        <p v-for="(entry, index) in characterStore.current.startkapital" :key="index">
          {{ entry.description }}: {{ entry.amount }} €
        </p>
      </div>
    </div>  

    <h3>Validation</h3>
    <p v-if="characterStore.isCharacterValid" class="valid-message">Character is ready!</p>
    <p v-else class="invalid-message">Character needs more work!</p>
  </div>
</template>

<style scoped>

.character-sheet {
  background-color: #f0f8ff;
  padding: 20px;
  margin: 0 auto;
  width: 1000px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  color: #333;
}

.attribute-wrapper {
    padding: 0;
}

.primary-attribute-wrapper {
    display:flex;
    flex-direction: row;
    border-radius: 10px;
    border: solid 1px #6a5acd;
    padding: 10px;
    background-color: white;
}

.secondary-attributes-wrapper {
    border-radius: 10px;
    border: solid 1px #6a5acd;
    padding: 10px;
    background-color: white;
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 10px;
}

.secondary-attributes-wrapper p {
  margin: 0;
  padding: 5px;
}

.attribute-button-wrapper {
  width: 100%;
  margin-top: 20px;
  text-align: center;
  gap: 10px;
  display: flex;
  flex-direction: row;
}

.attribute-button, .roll-button {
  background-color: #6a5acd;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin: 0px auto 20px;
}

.attribute-button:hover, .roll-button:hover {
  background-color: #0056b3;
}

.life-event-roll-section {
  text-align: center;
}

.life-event-roll-section h3 {
    border-bottom: 2px solid #007bff; /* Blue underline */
    margin-bottom: 15px;
}

h2, h3 {
  color: #2c3e50;
  border-bottom: 2px solid #42b983;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.input-field {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"] {
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #e0f2f7;
  padding: 8px 12px;
  border-radius: 5px;
  margin-bottom: 5px;
  display: inline-block; /* For inline list items */
  margin-right: 8px;
}

.valid-message {
  color: green;
  font-weight: bold;
}

.invalid-message {
  color: red;
  font-weight: bold;
}

.actions button {
    margin-top: 15px;
    background-color: #007bff;
}
.actions button:hover {
    background-color: #0056b3;
}

/* Add new styles for career history boxes and promotions */
.career-history-boxes {
    background-color: #e0f7fa; /* Light cyan */
    border: 1px solid #81d4fa; /* Light blue */
    border-radius: 10px;
    padding: 25px;
    margin: 30px auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    text-align: center;
}

.career-history-boxes h3 {
    color: #007bff; /* Blue */
    border-bottom: 2px solid #007bff;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.career-slots {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-bottom: 25px;
}

.career-slot {
    background-color: #f0f8ff; /* Alice Blue */
    border: 1px dashed #a7d9f7;
    border-radius: 8px;
    padding: 15px;
    width: 200px; /* Fixed width for the box */
    text-align: center;
    min-height: 120px; /* Ensure consistent height */
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.career-slot h4 {
    color: #4682b4; /* Steel Blue */
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1em;
}

.career-slot .career-empty p {
    color: #888;
    font-style: italic;
}

.career-slot .career-entry strong {
    display: block;
    font-size: 1.1em;
    color: #333;
    margin-bottom: 5px;
}

.career-slot .career-entry p {
    font-size: 0.85em;
    color: #555;
    margin: 0;
}

.promotions-display {
    background-color: #fffacd; /* Lemon Chiffon */
    border: 1px solid #ffd700; /* Gold */
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    font-weight: bold;
    color: #333;
}

.promotions-display h4 {
    color: #b8860b; /* Dark Goldenrod */
    margin-top: 0;
    margin-bottom: 10px;
}
</style>