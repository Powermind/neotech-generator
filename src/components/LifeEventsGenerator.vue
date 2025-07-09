<script setup>
import { useCharacterStore } from '../stores/character';
import { ref } from 'vue';

const characterStore = useCharacterStore();

// Reactive variable to hold the currently selected table name
const selectedTable = ref('childhood'); // Default to childhood

// Function to trigger rolling on the selected table
const handleRollLifeEvent = () => {
  characterStore.rollLifeEvent(selectedTable.value);
};

// Clear all life events
const clearLifeEvents = () => {
    characterStore.current.lifeEvents = [];
};
</script>

<template>
  <div class="life-events-generator">
    <h2>Life Events</h2>
    <div class="event-list">
      <p v-if="characterStore.current.lifeEvents.length === 0">No events rolled yet.</p>
      <ul>
        <li v-for="(event, index) in characterStore.current.lifeEvents" :key="index">
          <strong>[Roll: {{ event.roll }}]</strong> {{ event.description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.life-events-generator {
  background-color: #f7f7f7;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 30px;
  margin: 20px auto;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  text-align: left;
  color: #333;
}

h2, h3 {
  color: #2c3e50;
  border-bottom: 2px solid #5cb85c; /* Green underline for life events */
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.controls {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

label {
  font-weight: bold;
  color: #555;
}

select {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  background-color: white;
}

.controls button {
  background-color: #5cb85c; /* Green button */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.2s;
}

.controls button:hover {
  background-color: #4cae4c;
}

.event-list ul {
  list-style-type: none;
  padding: 0;
  margin-top: 15px;
}

.event-list li {
  background-color: #eafaea; /* Very light green */
  padding: 10px 15px;
  border-left: 5px solid #5cb85c;
  border-radius: 5px;
  margin-bottom: 10px;
}

.clear-button {
    background-color: #dc3545; /* Red for clear */
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9em;
    margin-top: 15px;
    transition: background-color 0.2s;
}

.clear-button:hover {
    background-color: #c82333;
}
</style>