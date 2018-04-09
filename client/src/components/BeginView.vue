<template>
  <div class="view-begin">

    <h2>CHOOSE TEST</h2>

    <form @submit.prevent="onSubmit" method="POST">
      <input type="text" placeholder="Enter Name" name="username" required v-model="username">
      <select name="test" v-model="selected">
        <option v-for="test in tests" :key="test.id">
          {{ test.name }}
        </option>
      </select>

      <button type="submit">LET'S TEST</button>
    </form>

    {{ testInfo }}

  </div>
</template>

<script>

import tests from '../store/tests.js'

export default {
  name: 'BeginView',
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
      for (let prop in this.tests) {
        if (this.selected === this.tests[prop].name) {
          return this.tests[prop].description
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
  .view-begin {
    background-color: pink;
    padding: 10px;
  }
</style>
