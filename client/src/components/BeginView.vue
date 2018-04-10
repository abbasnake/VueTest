<template>
  <div class="view">

    <h2 class="view__header">CHOOSE TEST</h2>
    <form-begin-view class="view__form"></form-begin-view>
    <p class="view__test-description"><!-- {{ testInfo }} --></p>

  </div>
</template>

<script>
import formBeginView from '@/components/formBeginView'

export default {
  name: 'BeginView',
  components: {
    'form-begin-view': formBeginView
  },
  data () {
    return {
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
    border: 1px solid red;
  }
  &__form {
    border: 1px solid green;
  }
  &__test-description {
    border: 1px solid blue;
  }
}
</style>
