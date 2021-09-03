import Vue from 'vue'
import Vuex from 'vuex'
import { API_REQUEST } from '@/api/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allCategory: [],
    score: null
  },
  mutations: {
    setScore (state, value) {
      state.score = value
    } 
  },
  actions: {
    async getAllQuestions() {
      const allQuestions = await API_REQUEST()
        .then(response => {
          return response.data
        })
        .catch(e => {
          console.log('ERROR', e)
        })
      this.state.allCategory = allQuestions.results
    }
  },
  modules: {
  }
})
