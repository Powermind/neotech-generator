<script setup>
import { useCharacterStore } from '../stores/character';
import { computed } from 'vue';

// Import all stage components
import CareerSelectionStage from './careerStages/CareerSelectionStage.vue';
import CareerSkillPurchaseStage from './careerStages/CareerSkillPurchaseStage.vue'; // <--- NEW IMPORT

const characterStore = useCharacterStore();

const currentStageComponent = computed(() => {
  switch (characterStore.current.currentCareerStage) {
    // Selection Stages
    case 'background_selection':
    case 'career1_selection':
    case 'career2_selection':
    case 'career3_selection':
      return CareerSelectionStage;

    // Skill Purchase Stages
    case 'background_skill_purchase':
    case 'career1_skill_purchase':
    case 'career2_skill_purchase':
    case 'career3_skill_purchase':
      return CareerSkillPurchaseStage; // <--- RENDER NEW COMPONENT HERE

    case 'finished':
      return null; // Or a summary component when finished
    default:
      return null; // Or an error component
  }
});

// Determine the type of careers to offer based on the stage
const currentCareerType = computed(() => {
    // We only need to provide 'background' or 'general' to CareerSelectionStage
    // The skill purchase stage doesn't need this prop.
    if (characterStore.current.currentCareerStage === 'background_selection') {
        return 'background';
    } else if (['career1_selection', 'career2_selection', 'career3_selection'].includes(characterStore.current.currentCareerStage)) {
        return 'general';
    }
    return ''; // Default or empty if not in a selection stage
});

// Array to define the order of career stages for display
// You might want to update these to reflect the new sub-stages for more granular progress display,
// but for now, we'll keep it high-level to match the stepper UI.
const careerStageOrder = ['background_selection', 'career1_selection', 'career2_selection', 'career3_selection', 'finished'];
</script>

<template>
  <div class="career-path-stepper">
    <h2>Character Career Path</h2>

    <div class="career-progress-indicators">
      <div
        v-for="stage in careerStageOrder"
        :key="stage"
        :class="{
          'indicator-item': true,
          'active': characterStore.current.currentCareerStage === stage,
          'completed': characterStore.current.careerHistory.some(c => c.stage.startsWith(stage.split('_')[0]) && c.stage.endsWith('_skill_purchase')), // Check if the main stage is completed
          'future': careerStageOrder.indexOf(stage) > careerStageOrder.indexOf(characterStore.current.currentCareerStage.split('_')[0] + '_selection') // Compare based on selection stage for future
        }"
      >
        {{ stage.replace('_selection', '').charAt(0).toUpperCase() + stage.replace('_selection', '').slice(1) }}
      </div>
    </div>

    <div v-if="currentStageComponent" class="current-stage-content">
      <component :is="currentStageComponent" :career-type="currentCareerType" />
    </div>
    <div v-else class="career-finished-message">
      <h3>Character Career Path Completed!</h3>
      <p>Your character has successfully completed all career stages.</p>
      <button @click="characterStore.resetCharacter()" class="reset-button">Start New Character</button>
    </div>
  </div>
</template>

<style scoped>
/* Your existing styles are fine */
.career-path-stepper {
  background-color: #fdfdfd;
  border: 1px solid #dcdcdc;
  border-radius: 12px;
  padding: 30px;
  margin: 30px auto;
  max-width: 900px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  color: #333;
  text-align: center;
}

h2 {
  color: #4b0082; /* Indigo */
  border-bottom: 2px solid #4b0082;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.career-progress-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  gap: 15px;
}

.indicator-item {
  padding: 10px 15px;
  border-radius: 20px;
  background-color: #e0e0e0;
  color: #777;
  font-weight: bold;
  font-size: 0.9em;
  transition: all 0.3s ease;
  white-space: nowrap; /* Keep text on single line */
}

.indicator-item.active {
  background-color: #4b0082; /* Indigo */
  color: white;
  box-shadow: 0 2px 8px rgba(75, 0, 130, 0.4);
  transform: scale(1.05);
}

.indicator-item.completed {
  background-color: #90ee90; /* Light Green */
  color: #28a745;
  box-shadow: 0 2px 5px rgba(0, 128, 0, 0.2);
}

.indicator-item.future {
  opacity: 0.7;
}

.current-stage-content {
  border: 1px dashed #cccccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-top: 20px;
}

.career-finished-message {
    padding: 40px;
    background-color: #d4edda;
    border: 1px solid #28a745;
    border-radius: 8px;
    margin-top: 30px;
}

.career-finished-message h3 {
    color: #28a745;
    margin-bottom: 15px;
}

.career-finished-message p {
    font-size: 1.1em;
    color: #333;
    margin-bottom: 20px;
}

.reset-button {
    background-color: #ffc107; /* Warning yellow */
    color: #333;
    border: none;
    padding: 12px 25px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.reset-button:hover {
    background-color: #e0a800;
}
</style>