<template>
    <form class="form" @submit.prevent="submitAnswer" method="POST">

      <h3 class="form__question">Question: {{ currentQuestion }}</h3>

      <label class="form__label" :for="`${currentQuestion}-${currentAnswer}`">{{ currentAnswer }}</label>
      <input class="form__answer" :id="`${currentQuestion}-${currentAnswer}`" name="answer" type="radio" required>

      <template v-for="fake in fakeAnswers">
        <!-- eslint-disable --> 
        <label class="form__label" :for="`${currentQuestion}-${fake}`"> {{ fake }} </label> 
        <!-- eslint-disable --> 
        <input class="form__answer" :id="`${currentQuestion}-${fake}`" name="answer" type="radio">
      </template>

      <button class="form__button">Submit</button>

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
      fakeAnswers: this.question.fakes
    }
  },
  methods: {
    submitAnswer () {
      console.log('answer submitted')
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
