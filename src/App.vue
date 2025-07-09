<script setup>
// You can remove the default HelloWorld.vue import if you don't use it
// import HelloWorld from './components/HelloWorld.vue'; 
</script>

<template>
  <div id="app-container">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
#app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  padding: 0;
}
</style>
