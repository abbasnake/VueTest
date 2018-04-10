<template>
  <div class="view">
    <h2 class="view__header">TESTING</h2>
    <div class="view__test">
      <form-test :test="getTest()"></form-test>
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
      tests
    }
  },
  methods: {
    getTest () {
      const testName = `test${this.$route.params.testNumber}`
      return tests[testName]
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
    border: 1px solid red;
    text-align: center;
  }
}
</style>
