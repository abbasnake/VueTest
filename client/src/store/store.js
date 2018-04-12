import Vue from 'vue'
import Vuex from 'vuex'
import tests from './tests'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    chosenTest: '',
    userAnswers: [],
    tests
  },
  getters: {
    username: state => state.username,
    chosenTest: state => state.chosenTest,
    testCount: state => Object.keys(state.tests).length, // not used
    testNames: state => {
      const arr = []
      for (let test in state.tests) {
        arr.push(state.tests[test].name)
      }
      return arr
    },
    chosenTestDescription: (state) => {
      let description = ''
      for (let test in state.tests) {
        if (state.tests[test].name === state.chosenTest) {
          description = state.tests[test].description
        }
      }
      return description
    },
    chosenTestNumber: (state) => {
      let num = ''
      for (let test in state.tests) {
        if (state.tests[test].name === state.chosenTest) {
          num = test.slice(-1)
        }
      }
      return num
    },
    chosenTestQuestions: state => {
      let questions = []
      for (let test in state.tests) {
        if (state.tests[test].name === state.chosenTest) {
          questions = state.tests[test].questions
        }
      }
      return questions
    },
    chosenTestAnswers: state => {
      let arr = []
      for (let test in state.tests) {
        if (state.tests[test].name === state.chosenTest) {
          for (let i = 0; i < state.tests[test].questions.length; i++) {
            let answers = []
            answers.push(state.tests[test].questions[i].answer)
            answers = answers.concat(state.tests[test].questions[i].fakes)
            arr.push(answers)
            // needs a shuffle as well
          }
        }
      }
      return arr
    },
    score: state => {
      let correctAnswers = 0
      for (let test in state.tests) {
        if (state.tests[test].name === state.chosenTest) {
          for (let i = 0; i < state.userAnswers.length; i++) {
            if (state.userAnswers[i].answer === state.tests[test].questions[i].answer) {
              correctAnswers++
            }
          }
        }
      }
      // correctAnswers = state.userAnswers[0].answer
      return correctAnswers
    }
  },
  mutations: {
    setUsername: (state, payload) => {
      state.username = payload
    },
    setChosenTest: (state, payload) => {
      state.chosenTest = payload
    },
    addAnswer: (state, payload) => {
      state.userAnswers.push(payload)
    }
  },
  actions: {
    setUsername: (context, payload) => {
      context.commit('setUsername', payload)
    },
    setChosenTest: (context, payload) => {
      context.commit('setChosenTest', payload)
    },
    addAnswer: (context, payload) => {
      context.commit('addAnswer', payload)
    }
  }
})
