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

p {
  margin: 0;
  padding: 0;
}

.attribute-box {
    width: 16%;
    text-align: center;
}
.attribute-label {
    font-size: 13px;
}
.attribute-value {
    font-size: 36px;
}

/* https://www.w3schools.com/howto/howto_css_glowing_text.asp */
.glow {
  color: #fff;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ffffff, 0 0 40px #ffffff, 0 0 50px hsl(0, 0%, 100%), 0 0 60px hsl(0, 0%, 100%), 0 0 70px hsl(0, 0%, 100%);
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
}
</style>