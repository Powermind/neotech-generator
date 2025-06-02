<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="reusable-component">
    <h3>My Reusable Component</h3>
    <p>{{ msg }}</p>
    <button @click="count++">Clicked {{ count }} times</button>
  </div>
</template>

<style scoped>
.reusable-component {
  margin-top: 30px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: #333;
}

.reusable-component h3 {
  color: #42b983;
}
</style>
