<template>
  <div class="view">
    <h2 class="view__header">TESTING</h2>
    <div class="view__test">
      <form-test v-for="question in questions" :key="question.id" :question="question"></form-test>
    </div>
  </div>
</template>

<script>
import tests from '../store/tests.js'
import formTest from '@/components/formTest'

export default {
  name: 'TestView',
  components: {
    'form-test': formTest
  },
  data () {
    return {
      tests,
      questions: this.getQuestions()
    }
  },
  methods: {
    getQuestions () {
      const testName = `test${this.$route.params.testNumber}`
      return tests[testName].questions
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
