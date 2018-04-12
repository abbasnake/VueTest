<template>
  <div class="view">
    <h2 class="view__header">CHOOSE TEST</h2>
    <form-begin-view class="view__form"></form-begin-view>
    <p class="view__test-description">{{testDescription}}</p>
  </div>
</template>

<script>
import formBeginView from '@/components/formBeginView'

export default {
  name: 'BeginView',
  components: {
    'form-begin-view': formBeginView
  },
  computed: {
    testDescription () {
      return this.$store.getters.chosenTestDescription
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
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    width: 100%;
  }
}
</style>
