<script setup>
import { useCharacterStore } from '../stores/character';
import { computed } from 'vue';

const characterStore = useCharacterStore();

// Use the sortedSkills getter for display
const skillsToDisplay = computed(() => characterStore.sortedSkills);

const handleUpdateSkillValue = (skillName, event) => {
  const newValue = parseInt(event.target.value);
  if (!isNaN(newValue)) {
    characterStore.updateSkill(skillName, newValue);
  }
};

// --- NEW METHOD: Handle toggling buyable status ---
const handleToggleBuyable = (skillName, event) => {
  characterStore.setSkillBuyable(skillName, event.target.checked);
};

const handleToggleEasy = (skillName) => {
  characterStore.toggleSkillEasy(skillName);
};
</script>

<template>
  <div class="skill-list-container">
    <h2>Skills</h2>
    <div class="skill-table-wrapper">
      <table class="skill-table">
        <thead>
          <tr>
            <th>Skill Name</th>
            <th>Value</th>
            <th>Easy?</th>
            <th>Buyable?</th> <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="skill in skillsToDisplay" :key="skill.name">
            <td>{{ skill.name }}</td>
            <td class="skill-value-cell">
              <input
                type="number"
                min="0"
                :value="skill.value"
                @input="handleUpdateSkillValue(skill.name, $event)"
              />
            </td>
            <td>
              <input
                type="checkbox"
                :checked="skill.easy"
                @change="handleToggleEasy(skill.name)"
              />
            </td>
            <td> <input
                type="checkbox"
                :checked="skill.buyable"
                @change="handleToggleBuyable(skill.name, $event)"
              />
            </td>
            <td>
              <button @click="characterStore.updateSkill(skill.name, skill.value + 1)">+</button>
              <button @click="characterStore.updateSkill(skill.name, skill.value - 1)">-</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="easy-skills-summary">
      Easy Skills: {{ characterStore.easySkills.map(s => s.name).join(', ') || 'None' }}
    </p>
    <p class="buyable-skills-summary">
        Buyable Skills: {{ characterStore.buyableSkills.map(s => s.name).join(', ') || 'None' }}
    </p>
  </div>
</template>

<style scoped>
.buyable-skills-summary {
    margin-top: 10px;
    font-style: italic;
    color: #4CAF50; /* Green for buyable summary */
    text-align: left;
    font-size: 0.9em;
}

.skill-list-container {
  background-color: #f8f8f8;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 30px;
  margin: 20px auto;
  max-width: 900px; /* Wider to accommodate table */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
  color: #333;
}

h2 {
  color: #2c3e50;
  border-bottom: 2px solid #a0522d; /* Sienna brown for skills */
  padding-bottom: 10px;
  margin-bottom: 20px;
  text-align: left;
}

.skill-table-wrapper {
  overflow-x: auto; /* Enable horizontal scrolling for narrow screens */
}

.skill-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.skill-table th,
.skill-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  vertical-align: middle;
}

.skill-table th {
  background-color: #f2f2f2;
  font-weight: bold;
  color: #555;
}

.skill-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.skill-table input[type="number"] {
  width: 60px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

.skill-table input[type="checkbox"] {
  transform: scale(1.2); /* Make checkbox slightly larger */
}

.skill-table button {
  background-color: #4CAF50; /* Green for +/ - */
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  margin: 0 2px;
  transition: background-color 0.2s;
}

.skill-table button:hover {
  background-color: #45a049;
}

.easy-skills-summary {
    margin-top: 20px;
    font-style: italic;
    color: #666;
    text-align: left;
    font-size: 0.9em;
}
</style>