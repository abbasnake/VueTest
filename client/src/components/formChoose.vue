<template>
  <form class="form" @submit.prevent="onSubmit" method="POST">
    <input
      class="form__input"
      type="text"
      placeholder="Enter Name"
      name="username"
      required
      v-model="username"
    >

    <select
      class="form__select"
      required
      name="test"
      v-model="selected"
      @change="onChange(selected)"
    >
      <option value="" selected disabled>choose</option>
      <option v-for="test in tests" :key="test.id">
        {{ test.name }}
      </option>
    </select>

    <button class="form__button" type="submit">LET'S TEST</button>
  </form>
</template>

<script>
import tests from '../store/tests.js'

export default {
  name: 'formChoose',
  data () {
    return {
      tests,
      username: '',
      selected: ''
    }
  },
  methods: {
    onSubmit () {
      this.$router.push({path: `/test/${this.getTestNumber()}`})
    },
    onChange (selected) {
      this.$emit('changeDescription', this.getDescription(selected))
    },
    getDescription (selected) {
      let desc = ''
      for (let test in this.tests) {
        if (this.tests[test].name === selected) {
          desc = this.tests[test].description
        }
      }
      return desc
    },
    getTestNumber () {
      let testNumber = '1'
      for (let test in this.tests) {
        if (this.tests[test].name === this.selected) {
          testNumber = test.slice(-1)
        }
      }
      return testNumber
    }
  }
}
</script>

<style lang="scss" scoped>
  .form {
    border: 1px solid green;
    display: grid;
    grid-gap: 5px;
    padding: 5px;
    &__input {
      padding: 5px;
      margin: 0 auto;
      width: 75%;
    }
    &__select {
      padding: 5px;
      margin: 0 auto;
      width: 75%;
    }
    &__button {
      padding: 5px;
      margin: 0 auto;
      width: auto;
    }
  }
</style>
