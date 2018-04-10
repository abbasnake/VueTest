<template>
  <div class="view">
    <h2 class="view__header">CHOOSE TEST</h2>

    <form-choose
      class="view__form"
      @changeDescription="changeDescription($event)"
    ></form-choose>

    <p class="view__test-description">{{ testDescription }}</p>
  </div>
</template>

<script>
import formChoose from '@/components/formChoose'

export default {
  name: 'BeginView',
  components: {
    'form-choose': formChoose
  },
  data () {
    return {
      testDescription: ''
    }
  },
  methods: {
    changeDescription (description) {
      this.testDescription = description
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
    border: 1px solid blue;
    padding: 5px;
  }
}
</style>
