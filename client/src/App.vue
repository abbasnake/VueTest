<template>
  <div id="app" class="app">
    <router-view class="app__view"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    // this.fetchTests() // comment out if using local db (./store/tests.js)
  },
  methods: {
    fetchTests () {
      this.$store.dispatch('fetchTests')
    }
  }
}
</script>

<style lang="scss">
/*
GLOBAL STYLES / RESET
*/
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

html, body, p, h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}

* {
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
  &::selection {
    background-color: rgb(77, 77, 77);
    color: white;
  }
}
</style>

<style lang="scss" scoped>
.app {
  display: grid;
  background-color: rgb(100, 100, 100);
  height: 100vh;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-rows: 8vh 2fr 2fr 1fr;
  &__view {
    background-color: rgb(200, 200, 200);
    border: 2px solid black;
    border-radius: 5px;
    grid-column: 1/5;
    grid-row: 2/3;
    margin: 0 auto;
    max-width: 500px;
    padding: 10px;
    width: 100%;
  }
}

@media (min-width: 295px) {
  .app {
    &__view {
      grid-column: 2/4;
    }
  }
}
</style>
