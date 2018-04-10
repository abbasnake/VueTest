<template>
  <h3>{{ test.question1.question }}</h3>
</template>

<script>
export default {
  name: 'formTest',
  props: {
    test: Object
  },
  data () {
    return {
      msg: 'what up'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
