import { API_REQUEST } from '@/api/'

const state = {
  allCategory: [],
  score: null
}

const mutations = {
  setScore(state, value) {
    state.score = value
  }
}

const actions = {
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
}

export default {
  state,
  actions,
  mutations
}