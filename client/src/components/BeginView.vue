<template>
  <div class="view">
    <h2 class="view__header">CHOOSE TEST</h2>

    <!-- <form-choose
      class="view__form"
      @changeDescription="changeDescription($event)"
    ></form-choose> -->

    <form class="view__form" @submit.prevent="onSubmit($event)" method="POST">
      <input type="text" placeholder="Enter Name" name="username" v-model="username" required>
      <select name="test" @change="changeDescription($event)" required>
        <option value="" selected disabled>choose</option>
        <!-- eslint-disable --> 
        <option v-for="name in testNames" :value="name">{{name}}</option>
      </select>
      <button type="submit">Begin</button>
    </form>

    <p class="view__test-description">{{testDescription}}</p>
  </div>
</template>

<script>
// import formChoose from '@/components/formChoose'

export default {
  name: 'BeginView',
  data () {
    return {
      username: '',
      selected: ''
    }
  },
  computed: {
    testCount () {
      return this.$store.getters.testCount
    },
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
.view {
  display: grid;
  grid-template-rows: auto auto 2fr;
  grid-template-columns: 1fr;
  &__header{
    // border: 1px solid red;
    padding: 5px;
    text-align: center;
  }
  &__test-description {
    border: 1px solid blue;
    padding: 5px;
  }
}
</style>
