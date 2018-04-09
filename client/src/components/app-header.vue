<template>
  <header>
    <h1>{{ msg }}</h1>
  </header>
</template>

<script>
export default {
  name: 'appHeader',
  data () {
    return {
      msg: 'I am the header component form components folder'
    }
  }
}
</script>

<style scoped>
* {
  background-color: pink;
}
</style>
