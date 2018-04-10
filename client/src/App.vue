<template>
  <div id="app" class="app">
    <router-view class="app__view"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body, p, h1, h2, h3, h4, h5, h6 {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>

<style lang="scss" scoped>
.app {
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-rows: 100px 2fr 2fr 1fr;
  &__view {
    background-color: rgb(200, 200, 200);
    border: 2px solid black;
    grid-column: 2/4;
    grid-row: 2/3;
    padding: 10px;
  }
}
</style>
