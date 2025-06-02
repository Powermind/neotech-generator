<script setup>
import MyReusableComponent from '../components/MyReusableComponent.vue';
import { useCharacterStore } from '../stores/character'; // Import your store

import { ref } from 'vue';

const characterStore = useCharacterStore(); // Get the store instance

// You can use ref to bind input fields directly to store properties
const newCharacterName = ref(characterStore.current.name);

// Function to update character name in the store
const updateName = () => {
  characterStore.updateCharacter('name', newCharacterName.value);
};

// Function to update an attribute
const increaseStrength = () => {
  characterStore.updateAttribute('strength', characterStore.current.attributes.strength + 1);
};

// Function to add an item
const addItem = () => {
  characterStore.addInventoryItem({ name: 'Potion', type: 'consumable', quantity: 1 });
};

const saveCurrentCharacter = () => {
    characterStore.saveCharacter({ ...characterStore.current }); // Pass a copy to save
};

const resetCurrentCharacter = () => {
    characterStore.resetCharacter();
    newCharacterName.value = characterStore.current.name; // Update input field too
}
</script>

<template>
  <div class="home-view">
    <h2>Welcome to Your Home Page!</h2>
    <p>This is your default view, rendered by Vue Router.</p>
    
    <MyReusableComponent msg="Hello from HomeView!" />
  </div>
</template>

<style scoped>
.home-view {
  padding: 20px;
  text-align: center;
}
</style>

