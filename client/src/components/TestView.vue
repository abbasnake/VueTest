<template>
  <div class="view">
    <h2 class="view__header">TESTING</h2>
    <form-test-view class="view__test"></form-test-view>
  </div>
</template>

<script>
import formTestView from '@/components/formTestView'

export default {
  name: 'TestView',
  components: {
    'form-test-view': formTestView
  }
}
</script>

<style lang="scss" scoped>
.view {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  &__header {
    padding: 5px;
    text-align: center;
  }
}
</style>
