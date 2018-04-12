import Vue from 'vue'
import Vuex from 'vuex'
import tests from './tests'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    chosenTest: '',
    tests
  },
  getters: {
    username: state => state.username,
    chosenTest: state => state.chosenTest,
    testCount: state => Object.keys(state.tests).length,
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
    }
  },
  mutations: {
    setUsername: (state, payload) => {
      state.username = payload
    },
    setChosenTest: (state, payload) => {
      state.chosenTest = payload
    }
  },
  actions: {
    setUsername: (context, payload) => {
      context.commit('setUsername', payload)
    },
    setChosenTest: (context, payload) => {
      context.commit('setChosenTest', payload)
    }
  }
})
