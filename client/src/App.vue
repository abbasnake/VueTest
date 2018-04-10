<template>
  <div id="app" class="l-app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body, h1, h2, h3, h4, h5, h6 {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.l-app {
  height: 100vh;
}
</style>
