<template>
  <div class="view">
    <h2 class="view__header">RESULT</h2>
    <p class="view__score">
      Thanks <strong>{{ username }}</strong>,
      you answered <strong>{{ score }}</strong>
      question(s) correctly
    </p>
  </div>
</template>

<script>
export default {
  name: 'ResultView',
  data () {
    return {
    }
  },
  computed: {
    username () {
      return this.$store.getters.username
    },
    score () {
      return this.$store.getters.score
    }
  }
}
</script>

<style lang="scss" scoped>
.view {
  display: grid;
  grid-template-rows: auto 1fr;
  &__header {
    padding: 5px;
    text-align: center;
  }
  &__score {
    padding: 5px;
  }
}
</style>
