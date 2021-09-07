<template>
  <div class="statistics">
    <h1>Статистика</h1>
    <h4>{{ `Ваш последний результат: ${getStatistics || score} из ${getQuestions.length}` }}</h4>
  </div>
</template>

<script>
export default {
  name: "Statistics",
  data() {
    return {
      score: 0,
    };
  },

  computed: {
    getStatistics() {
      return this.$store.state.score;
    },
    getQuestions() {
      return this.$store.state.allCategory;
    }
  },
  mounted() {
    this.score = localStorage.getItem("score");
  },
};
</script>
