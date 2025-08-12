<script setup>
import { useCharacterStore } from '../stores/character';
import { ref, computed } from 'vue'; // Import 'computed' here

const characterStore = useCharacterStore();

// Reactive variable to hold the currently selected table name
const selectedTable = ref('childhood'); // Default to childhood

// New reactive state for the flash effect
const isFlashing = ref(false);

// Function to trigger rolling on the selected table
const handleRollLifeEvent = () => {
  characterStore.rollLifeEvent(selectedTable.value);
  
  // Trigger the flash effect
  isFlashing.value = true;
  setTimeout(() => {
    isFlashing.value = false;
  }, 500); // Flash for 500 milliseconds
};

// Clear all life events
const clearLifeEvents = () => {
    characterStore.current.lifeEvents = [];
};

// New reactive state for showing all events
const showAllEvents = ref(false); // Controls whether to show all events or just the last two

// Computed property to determine which events to display
const displayedLifeEvents = computed(() => {
  // Get the reversed array of life events
  const reversedEvents = characterStore.current.lifeEvents.slice().reverse();
  
  // If showAllEvents is false, return only the first two events (which are the latest)
  // Otherwise, return all reversed events
  return showAllEvents.value ? reversedEvents : reversedEvents.slice(0, 2);
});

const numEvents = computed(() => {
  return characterStore.current.lifeEvents.length
});
</script>

<template>
  <div 
    class="life-events-generator"
    :class="{ 'flash-effect': isFlashing }"
  >
    <h2>Händelser i rollpersonens liv ({{ numEvents }})</h2>
    <div class="event-list">
      <p v-if="characterStore.current.lifeEvents.length === 0">Inga händelser ännu.</p>
      <ul>
        <!-- Now iterates over the computed property 'displayedLifeEvents' -->
        <li v-for="(event, index) in displayedLifeEvents" :key="index">
          <strong>[Roll: {{ event.roll }}]</strong> {{ event.description }}
        </li>
      </ul>
      <!-- Show "Show More" button if there are more than 2 events and not all are shown -->
      <button
        v-if="characterStore.current.lifeEvents.length > 2 && !showAllEvents"
        @click="showAllEvents = true"
        class="show-more-button"
      >
        Show All Events
      </button>
      <!-- Show "Show Less" button if all events are shown and there are more than 2 -->
      <button
        v-if="characterStore.current.lifeEvents.length > 2 && showAllEvents"
        @click="showAllEvents = false"
        class="show-less-button"
      >
        Show Less
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Basic styling for the buttons to make them look like small buttons */
.show-more-button, .show-less-button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.show-more-button:hover, .show-less-button:hover {
  background-color: #45a049;
}

.show-less-button {
  background-color: #f44336; /* Red */
}

.show-less-button:hover {
  background-color: #da190b;
}

.life-events-generator {
  background-color: #ffffff;
  border: 1px solid #6a5acd;
  border-radius: 10px;
  padding: 10px 30px;
  margin: 20px auto;
  max-width: 960px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  text-align: left;
  color: #333;
  transition: background-color 0.1s ease-in-out; /* Smooth transition for flash */
}

/* Flash effect styles */
.life-events-generator.flash-effect {
  background-color: #ffe0b2; /* A light orange/yellow to indicate a flash */
  box-shadow: 0 0 15px rgba(255, 165, 0, 0.5); /* A subtle glow */
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
