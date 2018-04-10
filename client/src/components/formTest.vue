<template>
    <form class="form">
      <h3 class="form__question">Question: {{ question.question }}</h3>
      <label class="form__label" for="">{{ question.answer }}</label>
      <input class="form__answer" name="answer" type="radio">
      <template v-for="fake in question.fakes">
        <!-- eslint-disable --> 
        <label class="form__label" for=""> {{ fake }} </label> 
        <!-- eslint-disable --> 
        <input class="form__answer" name="answer" type="radio">
      </template>
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .form {
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
  }
</style>
