<template>
  <header>
    <h1 class="title">{{ msg }}</h1>
  </header>
</template>

<script>
export default {
  name: 'appHeader',
  data () {
    return {
      msg: 'MATH'
    }
  }
}
</script>

<style scoped>
.title {
  align-items: center;
  border: 1px solid black;
  display: flex;
  height: 100%;
  justify-content: center;
}
</style>
