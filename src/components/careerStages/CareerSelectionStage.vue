<script setup>
import { useCharacterStore } from '../../stores/character';
import { computed, ref, watch } from 'vue';
import { nextTick } from 'vue';

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

// NEW: A local ref to store the attribute the user wants to bribe
const selectedBribeAttribute = ref(null);
const showBribeOptions = ref(false);


// Watch for changes in the local selectedCareerId and update the store
watch(selectedCareerId, (newId) => {
  if (newId !== null) {
    characterStore.selectCareer(newId);
  }
});

// A local computed property to check if a bribe can be afforded
const canAffordBribe = computed(() => {
    // For this example, we'll use a fixed cost of 10000.
    return characterStore.totalStartkapital >= 10000;
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
    if (characterStore.current.currentCareerStage === 'background_selection') return 'Bakgrund och uppväxtmiljö';
    if (characterStore.current.currentCareerStage === 'career1_selection') return 'Karriär 1';
    if (characterStore.current.currentCareerStage === 'career2_selection') return 'Karriär 2';
    if (characterStore.current.currentCareerStage === 'career3_selection') return 'Karriär 3';
    return 'Career Stage';
});

// NEW: Method to handle advancing the stage with the bribe info
const handleAdvanceWithBribe = () => {
    characterStore.applySelectedCareerEffects(selectedBribeAttribute.value);
    // Reset the local bribe selection after advancing
    selectedBribeAttribute.value = null;

    nextTick(() => {
      const el = document.getElementById('skillsSection');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
};

// Method to toggle the visibility of the bribe options
const toggleBribeOptions = () => {
  showBribeOptions.value = !showBribeOptions.value;
};
</script>


<template>
  <div class="career-selection-stage">
    <h2>{{ stageDisplayName }} Selection</h2>
    <p>Choose the path your character took during this stage of their life.</p>


    <!-- NEW: A flex container to hold the two main sections -->
    <div class="main-layout-container">
        <div class="career-options-panel">
            <div v-for="career in availableCareers" :key="career.id" class="career-card">
                <!-- NEW: Radio input and label side by side -->
                <input
                    type="radio"
                    :id="career.id"
                    :value="career.id"
                    v-model="selectedCareerId"
                    :disabled="props.careerType === 'general' && !characterStore.availableGeneralCareers.some(c => c.id === career.id)"
                />
                <label :for="career.id">
                    <h3>{{ career.name }}</h3>
                    <div class="career-info">
                        <div v-if="career.characteristicRolls && career.characteristicRolls.length" class="career-rolls-summary">
                          Framgångsslag:
                          <span v-for="(roll, rIndex) in career.characteristicRolls" :key="rIndex">
                            <span>{{ roll }}</span>
                            <span v-if="rIndex < career.characteristicRolls.length - 1">, </span>
                          </span>
                        </div>
                    </div>
                </label>
            </div>
        </div>

        <div v-if="selectedCareerDetails" class="selected-career-summary">
            <h3>Selected: {{ selectedCareerDetails.name }}</h3>
            <p>{{ selectedCareerDetails.description }}</p>
            <ul>
                <li>Skill Points: {{ selectedCareerDetails.baseCareerSkillPoints }}</li>
                <li>Free Skill Points: {{ selectedCareerDetails.baseFreeSkillPoints }}</li>
                <li>Stridsvana Points: {{ selectedCareerDetails.baseStridsvanaPoints }}</li>
                <li>Starting Capital: {{ selectedCareerDetails.startingCapital }}</li>
                <li>Promotion: {{ selectedCareerDetails.promotion }}</li>
                <li>Years in Career: {{ selectedCareerDetails.yearsInCareer }}</li>
            </ul>

            <div v-if="selectedCareerDetails.associatedSkills && selectedCareerDetails.associatedSkills.length" class="career-skills-preview">
                <h4>Associated Skills:</h4>
                <p>{{ selectedCareerDetails.associatedSkills.join(', ') }}</p>
            </div>

            <div v-if="props.careerType !== 'background' && selectedCareerDetails.characteristicRolls && selectedCareerDetails.characteristicRolls.length">
                <div v-if="canAffordBribe" id="can-bribe-wrapper">
                    <p>Du kan muta bort ett framgångsslag. Detta lyckas då automatiskt men kostar €10.000.</p>
                    <button @click="toggleBribeOptions" class="toggle-bribe-button">
                        {{ showBribeOptions ? 'Dölj mutor' : 'Visa mutor' }}
                    </button>
                    <div class="bribe-options" v-show="showBribeOptions">
                        <div v-for="roll in selectedCareerDetails.characteristicRolls" :key="roll" class="bribe-option">
                            <input
                                type="radio"
                                :id="`bribe-${selectedCareerDetails.id}-${roll}`"
                                :value="roll"
                                v-model="selectedBribeAttribute"
                                :name="`bribe-for-${selectedCareerDetails.id}`"
                            />
                            <label :for="`bribe-${selectedCareerDetails.id}-${roll}`">{{ roll }}</label>
                        </div>
                    </div>
                </div>
                <p v-if="!canAffordBribe" class="cannot-afford-message">Du behöver minst €10.000 i startkapital för att kunna muta bort framgångsslag</p>
            </div>
        </div>
    </div>
    <button @click="handleAdvanceWithBribe()" :disabled="!isNextButtonEnabled" class="next-step-button">
      Next Step: Apply Career Effects & Spend Skills
    </button>
  </div>
</template>

<style scoped>
/*
  UPDATED STYLES for the new layout
*/
.career-options-panel {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.career-card {
    display: flex; /* Makes the card a flex container */
    align-items: flex-start; /* Aligns the input and content to the top */
    padding: 10px; /* Reduced padding for a more compact look */
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease, border-color 0.2s ease;
}

.career-card:hover {
  transform: translateY(-2px); /* Smaller lift on hover */
  border-color: #6a5acd;
}

.career-card input[type="radio"] {
  margin-right: 10px;
  margin-top: 5px;
  transform: scale(1.2);
}

.career-card label {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-weight: normal;
}

.career-card h3 {
  margin-top: 0;
  margin-bottom: 5px; /* Reduced margin */
  color: #6a5acd;
  font-size: 1.1em; /* Smaller font size */
}

.career-card p {
  font-size: 0.85em; /* Smaller font size */
  color: #555;
  margin-bottom: 5px; /* Reduced margin */
}

.career-info {
  font-size: 0.8em;
  color: #777;
  margin-top: 5px; /* Reduced margin */
  padding-top: 5px;
  border-top: 1px dashed #e0e0e0;
}

/*
  NEW LAYOUT STYLES
  These styles define the two-column layout.
*/
.main-layout-container {
    display: flex;
    gap: 20px;
    align-items: flex-start; /* Aligns content to the top */
}

.selected-career-summary {
    flex: 2; /* Takes up 2 parts of the available space (2/3) */
    /* Existing styles are kept and combined with this new flex property */
    background-color: #e6ffe6;
    border: 1px solid #90ee90;
    border-radius: 8px;
    padding: 20px;
    margin-top: 0; /* Override the old margin */
    margin-bottom: 0; /* Override the old margin */
    text-align: left;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    /* NEW STICKY PROPERTIES */
    position: sticky;
    top: 20px; /* Adjust this value to control the top offset */
    z-index: 10;
}

/*
  RESPONSIVE DESIGN
  For screens smaller than 768px, switch back to a single column layout.
*/
@media (max-width: 768px) {
    .main-layout-container {
        flex-direction: column;
    }
    .career-options-panel, .selected-career-summary {
        width: 100%;
    }
}

/* Your existing styles are fine */
.career-selection-stage {
  background-color: #f0f8ff; /* Alice Blue */
  border: 1px solid #b0e0e6; /* Powder Blue */
  border-radius: 10px;
  padding: 30px;
  margin: 20px auto;
  max-width: 1200px; /* Increased max-width for better two-column display */
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
  display: none;
}

.intro-text {
  margin-bottom: 20px;
}

.career-header-wrapper {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}

.career-card .restrictions {
    color: #dc3545; /* Red for restrictions */
    font-weight: bold;
    margin-left: 5px;
}

.career-skills {
  padding-top: 5px;
  font-size: 1.1em;
}

.career-skills-header {
  font-weight: 700;
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


.toggle-bribe-button {
  background-color: #6a5acd;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  margin-top: 10px;
  margin-bottom: 10px;
}

.toggle-bribe-button:hover {
  background-color: #483d8b;
}

.bribe-options {
    display: flex;
    gap: 15px;
    margin-top: 10px;
    justify-content: center;
}

.bribe-option {
    display: flex;
    align-items: center;
}

.bribe-option input[type="radio"] {
    margin-right: 5px;
}

.cannot-afford-message {
    color: red;
    font-style: italic;
    font-size: 0.9em;
    margin-top: 10px;
}

.career-selection-stage h2 {
  color: #2c3e50;
  border-bottom: 2px solid #6a5acd; /* Slate Blue */
  padding-bottom: 10px;
  margin-bottom: 25px;
}

.next-step-button {
  background-color: #6a5acd;
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
  background-color: #483d8b;
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

</style>