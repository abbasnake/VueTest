<template>
  <div class="view">
    <h2 class="view__header">RESULT</h2>
    <p class="view__score">
      Thanks <strong class="view__score__username">{{ username }}</strong>,
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
  text-align: center;
  &__header {
    padding: 5px;
  }
  &__score {
    padding: 5px;
    &__username {
      color: rgb(144, 0, 0);
    }
  }
}
</style>
