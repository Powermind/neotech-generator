<script setup>
import { useCharacterStore } from '../stores/character'; // 1. Import your store function

// 2. Instantiate the store
// This gives you access to all state, getters, and actions defined in your character store.
const characterStore = useCharacterStore();
import { ref, watch } from 'vue'; // Import ref and watch
import { computed } from 'vue';

// 1. Define Props using defineProps()
const props = defineProps({
  attributeIndex: {
    type: Number,
    required: true,
    validator: (value) => value >= 0 && value < 9, // Assuming 7 attributes
  },
});

// 2. Use a computed property to get the attribute name from the index
const attributeName = computed(() => {
  return characterStore.current.attributes[props.attributeIndex].abbr;
});

// 3. Use another computed property to get the current attribute value
// This makes sure the value displayed is always reactive to the store
const attributeValue = computed(() => {
  return characterStore.current.attributes[props.attributeIndex].value;
});


</script>

<template>
  <div class="attribute-box">
    <p class="attribute-label">{{ attributeName }}</p>
    <p class="attribute-value">{{ attributeValue }}</p>
  </div>
</template>

<style scoped>
.attribute-box {
    width: 16%;
    text-align: center;
}
.attribute-value {
    font-size: 15px;
}
</style>