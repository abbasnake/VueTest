<template>
  <div id="app" class="l-app">
    <router-view class="l-app-view"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html, body, h1, h2, h3, h4, h5, h6 {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.l-app {
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  &-view {
    border: 2px solid black;
    grid-column: 2/4;
    grid-row: 2/3;
  }
}
</style>
