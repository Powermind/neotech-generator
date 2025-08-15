// CareerSkillPurchaseStage.vue

<script setup>
import { useCharacterStore } from '../../stores/character';
import { computed } from 'vue';

const characterStore = useCharacterStore();

// Reactive access to skill point pools
const careerPoints = computed(() => characterStore.current.careerPointsPool);
const freePoints = computed(() => characterStore.current.freeSkillPointsPool);
const academicPoints = computed(() => characterStore.current.academicSkillPointsPool);
const stridsvanaPoints = computed(() => characterStore.current.stridsvanaSkillPointsPool);

// --- NEW: Computed properties for initial awarded amounts ---
const initialCareerPoints = computed(() => characterStore.current.initialCareerPointsAwarded);
const initialFreePoints = computed(() => characterStore.current.initialFreeSkillPointsAwarded);
const initialAcademicPoints = computed(() => characterStore.current.initialAcademicSkillPointsAwarded);
const initialStridsvanaPoints = computed(() => characterStore.current.initialStridsvanaSkillPointsAwarded);

// Get a list of skills for display and spending
const careerBuyableSkills = computed(() => characterStore.buyableSkills);
const careerAcademicSkills = computed(() => characterStore.academicSkills);
const allSkillsSorted = computed(() => characterStore.sortedSkills); // For free points

// Function to handle spending career points
const spendSkillPoints = (skillName, levels, type) => {
  characterStore.spendSkillPoints(skillName, levels, type);
};

const returnSkillPoints = (skillName, levels, type) => {
  characterStore.returnSkillPoints(skillName, levels, type);
};

// Function to handle spending career points
const spendCareerSkill = (skillName, levels) => {
  characterStore.spendCareerSkillPoints(skillName, levels);
};

// Function to handle spending free points
const spendFreeSkill = (skillName, levels) => {
  characterStore.spendFreeSkillPoints(skillName, levels);
};

// Function to handle spending free points
const spendAcademicSkill = (skillName, levels) => {
  characterStore.spendAcademicSkillPoints(skillName, levels);
};

// Function to handle spending Stridsvana points (only on 'Stridsvana' skill)
const spendStridsvana = (levels) => {
  characterStore.spendStridsvanaSkillPoints(levels);
};

// Determine if the "Continue" button should be enabled
// For simplicity, we'll enable it once all points are spent.
const isContinueEnabled = computed(() => {
  return careerPoints.value < 2 && freePoints.value < 2 && stridsvanaPoints.value < 2;
});

const currentCareerName = computed(() => characterStore.current.currentCareerDetails?.name || 'Current Career');

// Map current stage name to display name
const stageDisplayName = computed(() => {
    if (characterStore.current.currentCareerStage === 'background_skill_purchase') return 'Bakgrundsfärdigheter';
    if (characterStore.current.currentCareerStage === 'career1_skill_purchase') return 'Färdigheter karriär 1';
    if (characterStore.current.currentCareerStage === 'career2_skill_purchase') return 'Färdigheter karriär 2';
    if (characterStore.current.currentCareerStage === 'career3_skill_purchase') return 'Färdigheter karriär 3';
    return 'Skill Purchase Stage';
});

// Helper to get the cost for a +1 advancement for a given skill and pool
const getCostForOneLevel = (skill, poolType) => {
    const currentSkillValue = skill.value;
    if (currentSkillValue > 9 && (characterStore.current.currentCareerStage === 'background_skill_purchase')) {
      return Infinity
    }
    const cost = characterStore.calculateSkillAdvancementCost(currentSkillValue, 1);
    // Check if the pool has enough points, and if the advancement is valid (not Infinity)
    if (poolType === 'career' && cost !== Infinity && careerPoints.value >= cost) {
        return cost;
    } else if (poolType === 'free' && cost !== Infinity && freePoints.value >= cost) {
        return cost;
    } else if (poolType === 'academic' && cost !== Infinity && academicPoints.value >= cost) {
        return cost;
    } else if (poolType === 'stridsvana' && cost !== Infinity && stridsvanaPoints.value >= cost) {
        return cost;
    }
    return Infinity; // Indicate impossible or not enough points
};

const getReductionCostForOneLevel = (skill, poolType) => {
    const currentSkillValue = skill.value;
    const cost = characterStore.calculateSkillReductionCost(currentSkillValue, 1);
    return cost
};

// Helper to check if a +1 button should be disabled
const isOneLevelDisabled = (skill, poolType) => {
    const currentSkillValue = skill.value;
    if (currentSkillValue < 15) {
        return false;
    }
    const cost = characterStore.calculateSkillAdvancementCost(currentSkillValue, 1);

    if (cost === Infinity || (skill.value + 1 > 15)) { // Cannot advance if cost is Infinity or exceeds max level
        return true;
    }

    if (poolType === 'career') {
        return careerPoints.value < cost;
    } else if (poolType === 'free') {
        return freePoints.value < cost;
    } else if (poolType === 'academic') {
        return academicPoints.value < cost;
    } else if (poolType === 'stridsvana') {
        return stridsvanaPoints.value < cost;
    }
    return true; // Default to disabled if poolType is unknown
};

const isReductionLevelDisabled = (skill, poolType) => {
    const currentSkillValue = skill.value;
    if (currentSkillValue > 0) {
        return false;
    }
    return true;
}
</script>

<template>
  <div class="career-skill-purchase-stage">
    <h2>{{ stageDisplayName }}: {{ currentCareerName }}</h2>
    <p>Fördela färdighetspoäng från karriären {{ currentCareerName }}.</p>

    <div class="skill-pools">
      <div class="pool-item">
        <h3>Karriärens färdighetspoäng: {{ careerPoints }}</h3>
      </div>
      <div class="pool-item" v-if="initialAcademicPoints > 0">
        <h3>Skolfärdighetspoäng: {{ academicPoints }}</h3>
      </div>
      <div class="pool-item" v-if="initialFreePoints > 0">
        <h3>Valfria färdighetspoäng: {{ freePoints }}</h3>
      </div>
      <div class="pool-item" v-if="initialStridsvanaPoints > 0">
        <h3>Stridsvana-poäng: {{ stridsvanaPoints }}</h3>
      </div>
    </div>

    <div class="skill-spending-area">
      <div class="skill-category">
        <h4>Karriärens färdighetspoäng ({{ careerPoints }} kvar)</h4>
        <div v-if="careerBuyableSkills.length > 0" class="skill-list">
          <div v-for="skill in careerBuyableSkills" :key="skill.name" class="skill-item">
            <span>
                {{ skill.name }}: {{ skill.value }}
            </span>
            <div class="skill-cost">
              <span class="cost-info" v-if="getCostForOneLevel(skill, 'career') !== Infinity">
                  ({{ getCostForOneLevel(skill, 'career') }})
              </span>
              <span class="cost-info invalid-cost" v-else>
                  (-)
              </span>
            </div>
            <button @click="spendSkillPoints(skill.name, getCostForOneLevel(skill, 'career'), 'career')" :disabled="isOneLevelDisabled(skill, 'career')">+</button>
            <button @click="returnSkillPoints(skill.name, getReductionCostForOneLevel(skill, 'career'), 'career')" :disabled="isReductionLevelDisabled(skill, 'career')">-</button>
        </div>
        </div>
        <p v-else>No career-specific skills to buy with career points.</p>
      </div>

      <div class="skill-category" v-if="initialFreePoints > 0">
        <h4>Valfria färdighetspoäng ({{ freePoints }} kvar)</h4>
        <div class="skill-list">
          <div v-for="skill in allSkillsSorted" :key="skill.name" class="skill-item">
            <span>
                {{ skill.name }}: {{ skill.value }}
            </span>
            <div class="skill-cost">
            <span class="cost-info" v-if="getCostForOneLevel(skill, 'free') !== Infinity">
                    ({{ getCostForOneLevel(skill, 'free') }})
                </span>
                <span class="cost-info invalid-cost" v-else>
                    (-)
                </span>
            </div>
            <button @click="spendSkillPoints(skill.name, getCostForOneLevel(skill, 'free'), 'free')" :disabled="isOneLevelDisabled(skill, 'free')">+</button>
            <button @click="returnSkillPoints(skill.name, getReductionCostForOneLevel(skill, 'free'), 'free')" :disabled="isReductionLevelDisabled(skill, 'free')">-</button>
          </div>
        </div>
      </div>

      <div class="skill-category" v-if="initialAcademicPoints > 0">
        <h4>Skolfärdighetspoäng ({{ academicPoints }} kvar)</h4>
        <div class="skill-list">
          <div v-for="skill in careerAcademicSkills" :key="skill.name" class="skill-item">
            <span>
                {{ skill.name }}: {{ skill.value }}
            </span>
            <div class="skill-cost">
            <span class="cost-info" v-if="getCostForOneLevel(skill, 'academic') !== Infinity">
                    ({{ getCostForOneLevel(skill, 'academic') }})
                </span>
                <span class="cost-info invalid-cost" v-else>
                    (-)
                </span>
            </div>
            <button @click="spendSkillPoints(skill.name, getCostForOneLevel(skill, 'academic'), 'academic')" :disabled="isOneLevelDisabled(skill, 'academic')">+</button>
            <button @click="returnSkillPoints(skill.name, getReductionCostForOneLevel(skill, 'academic'), 'academic')" :disabled="isReductionLevelDisabled(skill, 'academic')">-</button>
          </div>
        </div>
      </div>

      <div class="skill-category" v-if="initialStridsvanaPoints > 0">
        <h4>Stridsvana-poäng ({{ stridsvanaPoints }} kvar)</h4>
        <div class="skill-list">
          <div class="skill-item">
            <span>
                Stridsvana: {{ characterStore.current.skills.find(s => s.name === 'Stridsvana')?.value || 0 }}
                
            </span>
            <div class="skill-cost">
            <span class="cost-info" v-if="getCostForOneLevel(characterStore.current.skills.find(s => s.name === 'Stridsvana'), 'stridsvana') !== Infinity">
                    ({{ getCostForOneLevel(characterStore.current.skills.find(s => s.name === 'Stridsvana'), 'stridsvana') }})
                </span>
                <span class="cost-info invalid-cost" v-else>
                    (-)
                </span>
            </div>
            <button @click="spendSkillPoints('Stridsvana', getCostForOneLevel(characterStore.current.skills.find(s => s.name === 'Stridsvana'), 'stridsvana'), 'stridsvana')" :disabled="isOneLevelDisabled(characterStore.current.skills.find(s => s.name === 'Stridsvana'), 'stridsvana')">+</button>
            <button @click="returnSkillPoints('Stridsvana', getReductionCostForOneLevel(characterStore.current.skills.find(s => s.name === 'Stridsvana'), 'stridsvana'), 'stridsvana')" :disabled="isReductionLevelDisabled(characterStore.current.skills.find(s => s.name === 'Stridsvana'), 'stridsvana')">-</button>
          </div>
        </div>
      </div>
    </div>

    <button @click="characterStore.completeCurrentCareerStageAndAdvance()" class="continue-button">
      Fortsätt till nästa karriär
    </button>
  </div>
</template>

<style scoped>
/* Your existing styles are fine */
.career-skill-purchase-stage {
  background-color: #f7fafc; /* Light grey-blue */
  border: 1px solid #c2e0f0;
  border-radius: 10px;
  padding: 30px;
  margin: 20px auto;
  max-width: 900px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  color: #333;
}

h2 {
  color: #2c3e50;
  border-bottom: 2px solid #5a5acd; /* Slightly darker slate blue */
  padding-bottom: 10px;
  margin-bottom: 25px;
}

.skill-pools {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.pool-item {
  background-color: #e0f2f7; /* Lighter blue */
  border: 1px solid #b3e5fc;
  border-radius: 8px;
  padding: 15px;
  min-width: 200px;
  flex: 1;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.pool-item h3 {
  color: #0288d1; /* Deep Sky Blue */
  margin-top: 0;
  margin-bottom: 10px;
}

.skill-spending-area {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-bottom: 30px;
}

.skill-category {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.07);
  text-align: left;
}

.skill-category h4 {
  color: #3f51b5; /* Indigo-like */
  margin-top: 0;
  margin-bottom: 15px;
  border-bottom: 1px dashed #e0e0e0;
  padding-bottom: 8px;
}

.skill-list {
  max-height: 300px; /* Make scrollable if many skills */
  overflow-y: auto;
  padding-right: 10px; /* For scrollbar space */
}

.skill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px dotted #f0f0f0;
}

.skill-item:last-child {
  border-bottom: none;
}

.skill-item span {
  flex-grow: 1;
  font-weight: 500;
  color: #444;
}

.skill-item button {  
  background-color: #7986cb; /* Light Indigo */
  color: white;
  border: none;
  padding: 5px 10px; /* This padding gives them initial size */
  margin: 0 2px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.2s ease;
  white-space: nowrap; /* Prevent button text from wrapping */

  /* --- ADD THESE STYLES FOR CONSISTENT SIZING --- */
  width: 30px; /* Adjust as needed */
  height: 30px; /* Adjust as needed */
  display: flex; /* Use flexbox for centering content */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  box-sizing: border-box; /* Include padding and border in the width/height */
  /* ----------------------------------------------- */
}

.skill-item button:hover:not(:disabled) {
  background-color: #5c6bc0; /* Darker Indigo */
}

.skill-item button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.skill-cost {
  padding-right: 10px;
}

.continue-button {
  background-color: #4caf50; /* Green */
  color: white;
  border: none;
  padding: 15px 35px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.3em;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}

.continue-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.continue-button:hover {
  background-color: #43a047; /* Darker Green */
}

.cost-info {
    font-size: 0.85em;
    color: #666;
    margin-left: 10px;
}

.invalid-cost {
    color: #dc3545; /* Red for invalid costs */
    font-weight: bold;
}

</style>