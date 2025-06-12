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
    characterStore.rollAllAttributes4D6DropLowest()
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
    <h2>Character Details</h2>

    <div class="input-field">
      <label for="char-name">Name:</label>
      <input id="char-name" type="text" v-model="characterNameInput" />
    </div>

    <p>Current Name: <strong>{{ characterStore.current.name }}</strong></p>

    <h3>Attributes</h3>
    <div class="attribute-wrapper">
        <AttributeBox 
            v-for="(attribute, index) in characterStore.current.attributes"
            :key="attribute.name"
            :attribute="attribute"     
            :attribute-index="index"
        />
    </div>
    <div id="attribute-button">
        <button @click="rerollAttributes">Reroll Attributes</button>
    </div>

    <p>Startkapital: {{ characterStore.totalStartkapital }}</p>


    <div class="life-event-roll-section">
        <h3>Roll Life Events</h3>
        <p>Roll events for different stages of your character's life.</p>
        <button @click="handleRollChildhoodEvent" class="roll-button roll-life-event">Roll Upbringing Event</button>
    </div>
    <LifeEventsGenerator />

    <EventSkillDistribution />


    <div class="career-history-boxes">
        <h3>Career History</h3>
        <div class="career-slots">
            <div v-for="slot in careerHistorySlots" :key="slot.stage" class="career-slot">
                <h4>{{ slot.stage === 'background' ? 'Background' : `Career ${slot.stage.slice(-1)}` }}</h4>
                <div v-if="slot.career" class="career-entry">
                    <strong>{{ slot.career.name }}</strong>
                    <p>Promotion: {{ slot.career.promotion }}</p>
                    <p>Years: {{ slot.career.years }}</p>
                </div>
                <div v-else class="career-empty">
                    <p>-- Not yet chosen --</p>
                </div>
            </div>
        </div>
        <div class="promotions-display">
            <h4>Promotions Earned:</h4>
            <span v-if="characterStore.current.promotions.length === 0">None</span>
            <span v-else>{{ characterStore.current.promotions.join(', ') }}</span>
        </div>
    </div>

    <CareerPathStepper />

    <p>Total Attribute Points: {{ characterStore.totalAttributePoints }}</p>
    <div class="actions">
      <button @click="saveCurrent">Save Character</button>
      <button @click="resetCurrent">Reset Character</button>
    </div>

    <SkillList />

    <h3>Validation</h3>
    <p v-if="characterStore.isCharacterValid" class="valid-message">Character is ready!</p>
    <p v-else class="invalid-message">Character needs more work!</p>
  </div>
</template>

<style scoped>

.attribute-wrapper {
    display:flex;
    flex-direction: row;
}
.character-sheet {
  background-color: #f0f8ff;
  border: 1px solid #add8e6;
  border-radius: 10px;
  padding: 30px;
  margin: 20px auto;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  color: #333;
}



.life-event-roll-section {
  background-color: #eaf7ff; /* Lighter blue for this section */
  border: 1px solid #cce7ff;
  border-radius: 8px;
  padding: 20px;
  margin-top: 30px;
  text-align: center;
}

.life-event-roll-section h3 {
    border-bottom: 2px solid #007bff; /* Blue underline */
    margin-bottom: 15px;
}

.life-event-roll-section button {
  margin: 5px 10px; /* Adjust margin for these buttons */
  background-color: #007bff; /* Blue for life event buttons */
}

.life-event-roll-section button:hover {
  background-color: #0056b3;
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

button:hover {
  background-color: #368a65;
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