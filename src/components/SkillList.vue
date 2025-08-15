<script setup>
import { useCharacterStore } from '../stores/character';
import { computed } from 'vue';

const characterStore = useCharacterStore();
const skillsToDisplay = computed(() => characterStore.sortedSkills);
</script>

<template>
  <div class="skill-list-container">
    <h2>Skills</h2>

    <!-- Multi-column container: reads column-wise automatically -->
    <div class="skills-columns">
      <div
        v-for="skill in skillsToDisplay"
        :key="skill.name"
        class="skill-card"
      >
        <div class="skill-name">{{ skill.name }}</div>
        <div class="skill-value">{{ skill.value }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Keep your container styles the same as before */
.skill-list-container {
  background-color: #f8f8f8;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 16px;
  margin: 20px auto;
  max-width: 900px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  color: #333;
}

h2 {
  color: #2c3e50;
  border-bottom: 2px solid #a0522d;
  padding-bottom: 6px;
  margin-bottom: 12px;
  font-size: 1.1rem;
  text-align: left;
}

/* Columns — smaller gap for a tighter feel */
.skills-columns {
  column-count: 3;
  column-width: 200px;  /* narrower */
  column-gap: 8px;
}

/* Compact skill entries */
.skill-card {
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  margin-bottom: 6px;
  padding: 4px 8px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;

  /* Row layout with small gap */
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 0.85rem; /* slightly smaller text */
  line-height: 1.2;
}

/* Skill name styling */
.skill-name {
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Skill value aligned right */
.skill-value {
  color: #555;
  flex-shrink: 0;
  margin-left: 6px;
}

/* Responsive: fewer columns on smaller screens */
@media (max-width: 700px) {
  .skills-columns {
    column-count: 2;
  }
}
@media (max-width: 450px) {
  .skills-columns {
    column-count: 1;
  }
}
</style>
