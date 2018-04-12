<template>
  <div class="test">
    <h3 class="test__header">{{ chosenTest }}</h3>
    <!-- eslint-disable -->
    <form
      class="test__form"
      v-for="(question, index) in questions"
      v-show="show(index)"
      @submit.prevent="onSubmit(question.question)"
    >
      <h4 class="test__form__header">Question: {{ question.question }}</h4>
      <div class="test__form__inputs" v-for="answer in answers[index]">
        <!-- eslint-disable -->
        <input
          class="test__form__inputs__radio"
          type="radio"
          name="answer"
          required
          v-model="picked"
          :value="answer"
          :id="`${question.question}-${answer}`"
        >
        <label
          class="test__form__inputs__label"
          :for="`${question.question}-${answer}`"
        >
          {{answer}}
        </label>
      </div>
      <div class="test__form__progress-bar" :style="{width: `${progress}%`}">
        {{progress}}%
      </div>
      <transition name="bounce">
        <button class="test__form__button" type="submit" v-show="picked">Next</button>
      </transition>
    </form>
  </div>
</template>

<script>
export default {
  name: 'formTestView',
  data () {
    return {
      picked: '',
      progress: 0,
      currentQuestionIndex: 0
    }
  },
  computed: {
    chosenTest () {
      return this.$store.getters.chosenTest
    },
    questions () {
      return this.$store.getters.chosenTestQuestions
    },
    answers () {
      return this.$store.getters.chosenTestAnswers
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
      this.progress = Math.floor(100/this.questions.length * (this.currentQuestionIndex))
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
.test {
  border-bottom: 3px solid black;
  border-left: 3px solid black;
  border-right: 1px solid black;
  border-top: 1px solid black;
  border-radius: 5px;
  display: grid;
  grid-gap: 5px;
  grid-template-rows: auto 1fr;
  padding: 5px;
  text-align: center;
  &__header {
    padding: 5px;
  }
  &__form {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr;
    &__header {
      grid-column: 1/3;
    }
    &__inputs {
      display: grid;
      grid-column: 1/3;
      &__radio {
        display: none;
        &:checked + .test__form__inputs__label{
          background-color: rgb(155, 155, 155);
          border-top: 1px solid black;
          border-right: 1px solid black;
          border-bottom: 2px solid black;
          border-left: 2px solid black;
        }
      }
      &__label {
        border-bottom: 1px solid black;
        border-left: 1px solid black;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
        &:hover {
          background-color: rgb(155, 155, 155);
        }
      }
    }
    &__progress-bar {
      background-color: rgb(155, 155, 155);
      border-top: 1px solid black;
      border-right: 1px solid black;
      border-bottom: 2px solid black;
      border-left: 2px solid black;
      border-radius: 5px;
      font-size: 100%;
      margin: 0 auto;
      min-width: 40px;
      padding: 5px;
      width: auto;
    }
    &__button {
      background-color: rgb(233, 233, 233);
      border-top: 1px solid black;
      border-right: 1px solid black;
      border-bottom: 2px solid black;
      border-left: 2px solid black;
      border-radius: 5px;
      cursor: pointer;
      margin: 0 auto;
      padding: 5px;
      &:hover {
        background-color: white;
      }
    }
  }
}

.bounce-enter-active {
  animation: bounce-in .2s;
  }
  .bounce-leave-active {
    animation: bounce-in .1s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
