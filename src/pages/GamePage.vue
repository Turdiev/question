<template>
  <div class="game-page">
    <div class="game-page__question">
      <div v-if="endGame">
        <h2>{{ questions && questions.category }}</h2>
        <h5>{{ `Вопрос №${scoreNumberQuestions.length}` }}</h5>
        <h5>{{ questions && questions.question }}</h5>
      </div>
      <div v-else>
        {{
          `Количество правильных ответов: ${score} из ${scoreNumberQuestions.length}`
        }}
      </div>
    </div>
    <div>
      <div v-if="endGame" class="game-pages__actions">
        <template v-for="(question, index) in answersOnQuestions">
          <input
            v-model="answer"
            :id="`radio-${index}`"
            type="radio"
            class="input"
            :value="question"
            :key="index"
          />
          <label :key="`radio-${index}`" :for="`radio-${index}`" class="label">
            {{ question }}
          </label>
        </template>
      </div>
      <Button
        v-if="endGame"
        label="Ответ"
        color="secondary"
        class="button"
        @click="sendAnswer"
        :disabled="!answer"
      />
      <Button
        v-else
        label="На главную"
        color="primary"
        class="button"
        @click="goToMain"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "GamePages",
  components: {
    Button,
  },
  data() {
    return {
      scoreNumberQuestions: [],
      currentNumberQuestions: null,
      answer: false,
      questions: null,
      answersOnQuestions: [],
      score: 0,
      endGame: true,
    };
  },
  watch: {
    scoreNumberQuestions() {
      this.questions = this.getQuestions[this.currentQuestions];
      if (this.questions) {
        this.answersOnQuestions = [];
        this.answersOnQuestions.push(
          ...this.questions.incorrect_answers,
          this.questions.correct_answer
        );
      }
    },
  },
  computed: {
    getQuestions() {
      return this.$store.state.allCategory;
    },
  },
  methods: {
    sendAnswer() {
      if (this.scoreNumberQuestions.length === 10 && this.answer === this.questions.correct_answer) {
        this.score += 1;
        this.endGame = false;
      } else if (this.scoreNumberQuestions.length === 10 && this.answer !== this.questions.correct_answer) {
        this.endGame = false;
      } else {
        if (this.answer === this.questions.correct_answer) {
          this.score += 1;
          this.numberToQuestion();
          this.answer = false;
        } else {
          this.numberToQuestion();
          this.answer = false;
        }
      }

      this.$store.commit("setScore", this.score);
      localStorage.setItem("score", this.score);
    },
    numberToQuestion() {
      const newNumber = this.randomQuestions();
      if (this.scoreNumberQuestions.length < 10) {
        if (this.scoreNumberQuestions.includes(newNumber)) {
          this.numberToQuestion();
        } else {
          this.scoreNumberQuestions.push(newNumber);
          this.currentQuestions = newNumber;
        }
      } else {
        return "";
      }
    },
    randomQuestions() {
      return Math.floor(Math.random() * 10);
    },
    goToMain() {
      this.$router.push({ path: "/" });
    },
  },
  mounted() {
    this.numberToQuestion();
    this.questions = this.getQuestions[this.currentQuestions];
    if (this.questions) {
      this.answersOnQuestions.push(
        ...this.questions.incorrect_answers,
        this.questions.correct_answer
      );
    }
  },
};
</script>

<style>
.game-page {
  margin: 50px 50px;
  padding: 20px 20px;
}

.game-page__question {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;
}
.game-pages__actions {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;
}

.button {
  width: 100px;
  height: 28px;
  margin-left: 10px;
}

.input {
  width: 20px;
  height: 20px;
  margin-left: 15px;
}
</style>