<template>
  <div class="view">
    <h2 class="view__header">TESTING</h2>
    <div class="view__test">
      <h3>{{ chosenTest }}</h3>

      <!-- eslint-disable -->
      <form v-for="(question, index) in questions" v-show="show(index)" @submit.prevent="onSubmit(question.question)">
        <h4>Question: {{ question.question }}</h4>
        <template v-for="answer in question.fakes">
          <!-- eslint-disable -->
          <input required v-model="picked" :value="answer" type="radio" name="answer" :id="`${question.question}-${answer}`" >
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
      picked: '',
      currentQuestionIndex: 0
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
    onSubmit (question) {
      this.$store.dispatch('addAnswer', {
        question: question,
        answer: this.picked
      })
      this.picked = ''
      this.currentQuestionIndex++
      if (this.currentQuestionIndex >= this.questions.length) {
        // go to result page
        this.$router.push({path: '/result'})
      }
    },
    show (i) {
      return this.currentQuestionIndex === i
    }
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
