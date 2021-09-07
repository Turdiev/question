<template>
  <div class="main">
    <Button
      class="main__button"
      label="Start"
      color="primary"
      @click="gameStart"
    />
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Main",
  components: {
    Button,
  },

  methods: {
    gameStart() {
      this.$router.push({ path: "/game-page" });
    },
  },
  mounted() {
    this.$store.dispatch("getAllQuestions");
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main__button {
  width: 200px;
  height: 50px;
}
</style>
