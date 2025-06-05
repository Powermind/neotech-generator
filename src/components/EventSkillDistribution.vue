<template>
  <div class="event-skill-distribution" v-if="characterStore.current.pendingSkillDistributions.length > 0">
    <h2>Distribute Event Skill Points</h2>
    <p class="instruction-text">You have skill points from life events that need to be distributed.</p>
    
    <div v-for="distribution in characterStore.current.pendingSkillDistributions" 
         :key="distribution.id" 
         class="distribution-card">
      
      <div class="event-header">
        <h3>{{ distribution.eventDescription }}</h3>
        <p class="points-remaining">
          Points Remaining: <strong>{{ distribution.pointsRemaining }}</strong> / {{ distribution.pointsTotal }}
        </p>
      </div>

      <div class="skill-distribution-grid">
        <div v-for="skillName in distribution.allowedSkills" 
             :key="skillName" 
             class="skill-row">
          
          <div class="skill-info">
            <span class="skill-name">{{ skillName }}</span>
            <span class="current-value">Current: {{ getSkillValue(skillName) }}</span>
          </div>
          
          <div class="skill-controls">
            <button 
              @click="distributePoints(distribution.id, skillName, 1)"
              :disabled="distribution.pointsRemaining < 1 || getSkillValue(skillName) >= 20"
              class="add-point-btn">
              +1
            </button>
            
            <button 
              @click="distributePoints(distribution.id, skillName, -1)"
              :disabled="getDistributedPoints(distribution.id, skillName) <= 0"
              class="remove-point-btn">
              -1
            </button>
            
            <span class="distributed-count">
              Added: {{ getDistributedPoints(distribution.id, skillName) }}
            </span>
          </div>
        </div>
      </div>

      <div class="distribution-actions">
        <button 
          @click="completeDistribution(distribution.id)"
          :disabled="distribution.pointsRemaining > 0"
          class="complete-btn">
          Complete Distribution
        </button>
        
        <button 
          @click="resetDistribution(distribution.id)"
          class="reset-btn">
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCharacterStore } from '../stores/character';
import { computed } from 'vue';

const characterStore = useCharacterStore();

// Get current skill value from the character
const getSkillValue = (skillName) => {
  const skill = characterStore.current.skills.find(s => s.name === skillName);
  return skill ? skill.value : 0;
};

// Track how many points have been distributed to each skill for each event
const getDistributedPoints = (distributionId, skillName) => {
  const distribution = characterStore.current.pendingSkillDistributions.find(d => d.id === distributionId);
  if (!distribution.distributedPoints) {
    distribution.distributedPoints = {};
  }
  return distribution.distributedPoints[skillName] || 0;
};

// Distribute points to a skill
const distributePoints = (distributionId, skillName, pointChange) => {
  const distribution = characterStore.current.pendingSkillDistributions.find(d => d.id === distributionId);
  
  if (!distribution.distributedPoints) {
    distribution.distributedPoints = {};
  }
  
  const currentDistributed = distribution.distributedPoints[skillName] || 0;
  const newDistributed = currentDistributed + pointChange;
  
  // Validate the change
  if (pointChange > 0 && distribution.pointsRemaining < pointChange) {
    return; // Not enough points remaining
  }
  
  if (pointChange < 0 && newDistributed < 0) {
    return; // Can't go below 0
  }
  
  if (pointChange > 0 && getSkillValue(skillName) >= 20) {
    return; // Skill cap check
  }
  
  // Apply the change
  distribution.distributedPoints[skillName] = newDistributed;
  distribution.pointsRemaining -= pointChange;
  
  // Update the character's skill
  const skill = characterStore.current.skills.find(s => s.name === skillName);
  if (skill) {
    skill.value += pointChange;
  }
};

// Complete the distribution and remove from pending
const completeDistribution = (distributionId) => {
  const index = characterStore.current.pendingSkillDistributions.findIndex(d => d.id === distributionId);
  if (index !== -1) {
    characterStore.current.pendingSkillDistributions.splice(index, 1);
  }
};

// Reset all distributed points for this event
const resetDistribution = (distributionId) => {
  const distribution = characterStore.current.pendingSkillDistributions.find(d => d.id === distributionId);
  
  if (distribution.distributedPoints) {
    // Reverse all skill changes
    for (const [skillName, points] of Object.entries(distribution.distributedPoints)) {
      const skill = characterStore.current.skills.find(s => s.name === skillName);
      if (skill) {
        skill.value -= points;
      }
    }
    
    // Reset the distribution tracking
    distribution.distributedPoints = {};
    distribution.pointsRemaining = distribution.pointsTotal;
  }
};
</script>

<style scoped>
.event-skill-distribution {
  background-color: #fff5e6; /* Light orange background to distinguish from other sections */
  border: 2px solid #ff8c00; /* Orange border */
  border-radius: 10px;
  padding: 25px;
  margin: 20px auto;
  max-width: 800px;
  box-shadow: 0 4px 12px rgba(255, 140, 0, 0.2);
  color: #333;
}

.event-skill-distribution h2 {
  color: #cc6600; /* Dark orange */
  border-bottom: 2px solid #ff8c00;
  padding-bottom: 10px;
  margin-bottom: 15px;
  text-align: center;
}

.instruction-text {
  text-align: center;
  font-style: italic;
  color: #666;
  margin-bottom: 25px;
}

.distribution-card {
  background-color: #ffffff;
  border: 1px solid #ffcc99;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.event-header {
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px dashed #ffcc99;
}

.event-header h3 {
  color: #cc6600;
  margin: 0 0 10px 0;
  font-size: 1.2em;
}

.points-remaining {
  font-size: 1.1em;
  color: #333;
  margin: 0;
}

.skill-distribution-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

.skill-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
}

.skill-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.skill-name {
  font-weight: bold;
  color: #333;
  font-size: 1em;
}

.current-value {
  font-size: 0.85em;
  color: #666;
}

.skill-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.add-point-btn, .remove-point-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  min-width: 40px;
  transition: background-color 0.2s;
}

.remove-point-btn {
  background-color: #f44336; /* Red for remove */
}

.add-point-btn:hover:not(:disabled) {
  background-color: #45a049;
}

.remove-point-btn:hover:not(:disabled) {
  background-color: #d32f2f;
}

.add-point-btn:disabled, .remove-point-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.distributed-count {
  font-size: 0.9em;
  color: #666;
  min-width: 70px;
  text-align: center;
}

.distribution-actions {
  display: flex;
  justify-content: center;
  gap: 15px;
  padding-top: 15px;
  border-top: 1px dashed #ffcc99;
}

.complete-btn {
  background-color: #28a745; /* Green */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.2s;
}

.complete-btn:hover:not(:disabled) {
  background-color: #218838;
}

.complete-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.reset-btn {
  background-color: #6c757d; /* Gray */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.2s;
}

.reset-btn:hover {
  background-color: #5a6268;
}

/* Responsive design for smaller screens */
@media (max-width: 600px) {
  .skill-row {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
  
  .skill-controls {
    justify-content: center;
  }
}
</style>