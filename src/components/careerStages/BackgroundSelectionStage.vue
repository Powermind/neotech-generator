<script setup>
import { useCharacterStore } from '../../stores/character';
import { computed, ref, watch } from 'vue';

const characterStore = useCharacterStore();

const props = defineProps({
  careerType: { // 'background' or 'general'
    type: String,
    required: true,
  },
});

// Computed property to get the list of available careers for this stage
const availableCareers = computed(() => {
  if (props.careerType === 'background') {
    return characterStore.availableBackgroundCareers;
  } else if (props.careerType === 'general') {
    return characterStore.availableGeneralCareers; // This getter applies restrictions
  }
  return [];
});

// Local ref to hold the currently selected career ID from the dropdown/radio buttons
const selectedCareerId = ref(characterStore.current.selectedCareerId);

// Watch for changes in the local selectedCareerId and update the store
watch(selectedCareerId, (newId) => {
  if (newId !== null) {
    characterStore.selectCareer(newId);
  }
});

// Watch for store changes to `selectedCareerId` (e.g., if a reset or advanceCareerStage clears it)
watch(() => characterStore.current.selectedCareerId, (newIdInStore) => {
    selectedCareerId.value = newIdInStore;
}, { immediate: true });

// Get the full details of the currently selected career from the store
const selectedCareerDetails = computed(() => {
    return characterStore.current.currentCareerDetails;
});

// Determine if the "Next Step" button should be enabled
const isNextButtonEnabled = computed(() => {
    return selectedCareerId.value !== null;
});

// Map current stage name to display name (updated for new stage names)
const stageDisplayName = computed(() => {
    if (characterStore.current.currentCareerStage === 'background_selection') return 'Social klass';
    if (characterStore.current.currentCareerStage === 'career1_selection') return 'Karriär 1';
    if (characterStore.current.currentCareerStage === 'career2_selection') return 'Karriär 2';
    if (characterStore.current.currentCareerStage === 'career3_selection') return 'Karriär 3';
    return 'Career Stage';
});

const backgroundName = computed(() => {
  return  characterStore.current.currentCareerDetails?.name;
});

const upbringingName = computed(() => { return characterStore.current.upbringing })

</script>

<template>
  <div class="career-selection-stage">
    <h2>{{ stageDisplayName }}<span v-if="characterStore.current.hasRolledBackground">: {{ backgroundName }}</span></h2>
    <div v-if="!characterStore.current.hasRolledBackground" class="pre-background">
      <p>Slå vilken social klass och upväxtmiljö rollpersonen kommer ifrån</p>
      <button @click="characterStore.rollBackground()" class="next-step-button">
        Slå uppväxtmiljö och bakgrund
    </button>
    </div>

    <div v-if="characterStore.current.hasRolledBackground" class="post-background">
      <p>Rollpersonens uppväxtmiljö: {{ upbringingName }}</p>
      <button @click="characterStore.applySelectedCareerEffects()" :disabled="!isNextButtonEnabled" class="next-step-button">
        Nästa Steg: Applicera karriärseffekter och köp färdigheter
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Your existing styles are fine */
.career-selection-stage {
  background-color: #f0f8ff; /* Alice Blue */
  border: 1px solid #b0e0e6; /* Powder Blue */
  border-radius: 10px;
  padding: 30px;
  margin: 20px auto;
  max-width: 900px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #333;
}

h2 {
  color: #2c3e50;
  border-bottom: 2px solid #6a5acd; /* Slate Blue */
  padding-bottom: 10px;
  margin-bottom: 25px;
}

.career-options {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
}

.career-card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  width: 280px;
  text-align: left;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, border-color 0.2s ease;
  display: flex; /* For radio button alignment */
  align-items: flex-start;
}

.career-card:hover {
  transform: translateY(-5px);
  border-color: #6a5acd; /* Highlight on hover */
}

.career-card input[type="radio"] {
  margin-right: 10px;
  margin-top: 5px; /* Align with h3 */
  transform: scale(1.2);
}

.career-card label {
  cursor: pointer;
  display: flex; /* Makes the whole label clickable for its content */
  flex-direction: column;
  flex-grow: 1; /* Allows content to take remaining space */
  font-weight: normal; /* Override default label bold */
}

.career-card h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #6a5acd; /* Slate Blue */
}

.career-card p {
  font-size: 0.9em;
  color: #555;
  margin-bottom: 10px;
}

.career-info {
  font-size: 0.8em;
  color: #777;
  margin-top: 10px;
  border-top: 1px solid #eee;
  padding-top: 10px;
}

.career-card .restrictions {
    color: #dc3545; /* Red for restrictions */
    font-weight: bold;
    margin-left: 5px;
}

.selected-career-summary {
  background-color: #e6ffe6; /* Light green for summary */
  border: 1px solid #90ee90;
  border-radius: 8px;
  padding: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.selected-career-summary h3 {
  color: #28a745; /* Green */
  margin-top: 0;
  margin-bottom: 15px;
  text-align: center;
}

.selected-career-summary ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}

.selected-career-summary li {
  background-color: #f0fff0;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #d4edda;
}

.next-step-button {
  background-color: #6a5acd; /* Slate Blue */
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.next-step-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.next-step-button:hover:not(:disabled) {
  background-color: #483d8b; /* Darker Slate Blue */
}
</style>