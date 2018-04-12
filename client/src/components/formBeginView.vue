<template>
  <form class="form" @submit.prevent="onSubmit($event)" method="POST">
    <input class="form__input" type="text" placeholder="Enter Name" name="username" v-model="username" required>
    <select class="form__select" name="test" @change="changeDescription($event)" required>
      <option value="" selected disabled>choose</option>
      <!-- eslint-disable --> 
      <option v-for="name in testNames" :value="name">{{name}}</option>
    </select>
    <button class="form__button" type="submit">Begin</button>
  </form>
</template>

<script>
export default {
  name: 'formBeginView',
  data () {
    return {
      username: ''
    }
  },
  computed: {
    testNames () {
      return this.$store.getters.testNames
    },
    testDescription () {
      return this.$store.getters.chosenTestDescription
    },
    chosenTestNumber () {
      return this.$store.getters.chosenTestNumber
    }
  },
  methods: {
    changeDescription (e) {
      this.$store.dispatch('setChosenTest', e.target.value)
    },
    onSubmit (e) {
      // console.log(e.target[0].value) // another way to get input data(username), is it better?
      this.$store.dispatch('setUsername', this.username)
      this.$router.push({path: `/test/${this.chosenTestNumber}`})
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  grid-gap: 5px;
  padding: 5px;
  &__input {
    margin: 0 auto;
    width: 50%;
  }
  &__select {
    margin: 0 auto;
    width: 50%;
  }
  &__button {
    margin: 0 auto;
    width: auto;
  }
}
</style>
