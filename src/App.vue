<script setup>
// You can remove the default HelloWorld.vue import if you don't use it
// import HelloWorld from './components/HelloWorld.vue'; 
</script>

<template>
  <div id="app-container">
    <header>
      <h1>Neogen v2</h1>
      <nav>
        <router-link to="/">Home</router-link>
        </nav>
    </header>

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
  margin-top: 20px;
}

header {
  margin-bottom: 40px;
}

nav {
  margin-top: 20px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #2c3e50;
  border-bottom: 2px solid #42b983;
}
</style>
