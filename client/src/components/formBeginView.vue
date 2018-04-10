<template>
  <form class="form" @submit.prevent="onSubmit" method="POST">
    <input type="text" placeholder="Enter Name" name="username" required v-model="username">
    <select name="test" v-model="selected">
      <option v-for="test in tests" :key="test.id">
        {{ test.name }}
      </option>
    </select>

    <button type="submit">LET'S TEST</button>
  </form>
</template>

<script>
import tests from '../store/tests.js'

export default {
  name: 'formBeginView',
  data () {
    return {
      tests,
      testChoice: 'testChoice',
      username: '',
      selected: ''
    }
  },
  computed: {
    testInfo () {
      for (let test in this.tests) {
        if (this.selected === this.tests[test].name) {
          return this.tests[test].description
        }
      }
    }
  },
  methods: {
    onSubmit () {
      this.$router.push({path: `/test/${this.testChoice}`})
      console.log(this.username)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
