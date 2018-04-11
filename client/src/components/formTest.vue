<template>
    <form class="form" @submit.prevent="submitAnswer(picked)" method="POST">

      <h3 class="form__question">Question: {{ currentQuestion }}</h3>

      <template v-for="answer in allAnswers">
        <!-- eslint-disable --> 
        <input
          class="form__radio"
          :id="`${currentQuestion}-${answer}`"
          :value="answer"
          name="answer"
          type="radio"
          v-model="picked"
          required
        >
        <!-- eslint-disable --> 
        <label class="form__label" :for="`${currentQuestion}-${answer}`">
          {{ answer }}
        </label> 
      </template>

      <button v-if="picked" class="form__button">Done</button>
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
      allAnswers: [],
      picked: ''
    }
  },
  methods: {
    submitAnswer (userAnswer) {
      console.log('---------------')
      console.log(`Question ${this.currentQuestion}`)
      console.log(`Correct answer ${this.currentAnswer}`)
      console.log(`User answered ${userAnswer}`)
    },
    returnAllAnswers () {
      let arr = this.question.fakes
      arr.push(this.question.answer)
      // need to shuffle array here as well
      return arr
    }
  },
  mounted () {
    this.allAnswers = this.returnAllAnswers()
  }
}
</script>

<style lang="scss" scoped>
  .form {
    border: 1px solid red;
    display: grid;
    grid-gap: 2px;
    grid-template-columns: 1fr 1fr;
    &__question {
      grid-column: 1/3;
      text-align: center;
    }
    &__radio {
      // outline: 1px solid white;
      margin: 0;
      margin-top: 2px;
      display: none;
      &:checked + .form__label{
        background-color: rgb(255, 100, 100);
      }
    }
    &__label {
      border: 1px solid white;
      grid-column: 1/3;
      text-align: center;
      padding-right: 5px;
      &:hover {
        border: 1px solid black;
      }
    }
    &__button {
      grid-column: 1/3;
      margin: 0 auto;
      width: auto;
    }
  }
</style>
