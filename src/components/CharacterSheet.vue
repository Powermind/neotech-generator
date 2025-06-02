<script setup>
import { useCharacterStore } from '../stores/character'; // 1. Import your store function

import AttributeBox from './AttributeBox.vue'
import LifeEventsGenerator from './LifeEventsGenerator.vue'; 

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

    <div class="life-event-roll-section">
        <h3>Roll Life Events</h3>
        <p>Roll events for different stages of your character's life.</p>
        <button @click="handleRollChildhoodEvent" class="roll-button roll-life-event">Roll Upbringing Event</button>
    </div>
    <LifeEventsGenerator />

    <p>Total Attribute Points: {{ characterStore.totalAttributePoints }}</p>

    <div class="actions">
      <button @click="saveCurrent">Save Character</button>
      <button @click="resetCurrent">Reset Character</button>
    </div>

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
</style>