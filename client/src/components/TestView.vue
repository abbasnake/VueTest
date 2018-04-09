<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ $route.params.testID }}</h2>
  </div>
</template>

<script>
export default {
  name: 'TestView',
  data () {
    return {
      msg: 'Welcome to TestView'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
