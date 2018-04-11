<template>
    <form class="form" @submit.prevent="submitAnswer(picked)" method="POST">

      <h3 class="form__question">Question: {{ currentQuestion }}</h3>

      <label
        class="form__label"
        :for="`${currentQuestion}-${currentAnswer}`"
      >
        {{ currentAnswer }}
      </label>
      <input
        class="form__answer"
        :id="`${currentQuestion}-${currentAnswer}`"
        :value="currentAnswer"
        name="answer"
        type="radio"
        required
        v-model="picked"
      >

      <template v-for="fake in fakeAnswers">
        <!-- eslint-disable --> 
        <label
          class="form__label"
          :for="`${currentQuestion}-${fake}`"
        >
          {{ fake }}
        </label> 
        <!-- eslint-disable --> 
        <input
          class="form__answer"
          :id="`${currentQuestion}-${fake}`"
          :value="fake"
          name="answer"
          type="radio"
          v-model="picked"
        >
      </template>

      <button class="form__button">Done</button>
    </form>
</template>

<script>
export default {
  name: 'formTest',
  props: {
    question: Object
  },
  data () {
    return {
      currentQuestion: this.question.question,
      currentAnswer: this.question.answer,
      fakeAnswers: this.question.fakes,
      picked: ''
    }
  },
  methods: {
    submitAnswer (userAnswer) {
      console.log(`Question was ${this.currentQuestion}, correct answer was ${this.currentAnswer}, user answered ${userAnswer}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .form {
    border: 1px solid red;
    display: grid;
    grid-template-columns: 1fr 1fr;
    &__question {
      grid-column: 1/3;
      text-align: center;
    }
    &__label {
      // border: 1px solid white;
      text-align: right;
      padding-right: 5px;
    }
    &__answer {
      // outline: 1px solid white;
      margin: 0;
      margin-top: 2px;
    }
    &__button {
      width: auto;
      justify-self: end;
    }
  }
</style>
