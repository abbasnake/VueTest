<template>
  <div class="view">
    <h2 class="view__header">TESTING</h2>
    <div class="view__test">
      <h3>{{ chosenTest }}</h3>

      <!-- eslint-disable -->
      <form v-for="question in questions" @submit.prevent="onSubmit($event)">
        <h4>Question: {{ question.question }}</h4>
        <template v-for="answer in question.fakes">
          <!-- eslint-disable -->
          <input type="radio" name="answer" :id="`${question.question}-${answer}`" >
          <label :for="`${question.question}-${answer}`">{{answer}}</label>
        </template>
        <button type="submit">Done</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestView',
  data () {
    return {
    }
  },
  computed: {
    chosenTest () {
      return this.$store.getters.chosenTest
    },
    questions () {
      return this.$store.getters.chosenTestQuestions
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.view {
  display: grid;
  grid-template-rows: auto 2fr;
  grid-template-columns: 1fr;
  &__header {
    text-align: center;
  }
  &__test {
    border: 1px solid purple;
    padding: 5px;
  }
}
</style>
