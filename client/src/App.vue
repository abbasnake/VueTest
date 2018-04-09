<template>
  <div id="app" class="l-app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>

import appHeader from '@/components/app-header'

export default {
  name: 'App',
  components: {
    appHeader
  }
}
</script>

<style>
html, body, h1, h2, h3, h4, h5, h6 {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.l-app {
  display: grid;
  grid-template-rows: 1fr 4fr;
  height: 100vh;
}
</style>
