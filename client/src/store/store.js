import Vue from 'vue'
import Vuex from 'vuex'
import tests from './tests' // uncomment if using local db (./tests.js)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    chosenTest: '',
    userAnswers: [],
    tests, // uncomment if using local db (./tests.js) + comment out the line below
    // tests: {} // comment out if using local db
  },
  getters: {
    username: state => state.username,
    chosenTest: state => state.chosenTest,
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
    },
    fetchTests: (state, payload) => {
      state.tests = payload
    }
  },
  actions: {
    setUsername: (context, payload) => {
      context.commit('setUsername', payload)
      fetch('http://localhost:8081/api/username', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: payload})
      })
        .then(console.log('username set'))
    },
    setChosenTest: (context, payload) => {
      context.commit('setChosenTest', payload)
      fetch('http://localhost:8081/api/chosen_test', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({chosenTest: payload})
      })
        .then(console.log('test chosen'))
    },
    addAnswer: (context, payload) => {
      context.commit('addAnswer', payload)
      fetch('http://localhost:8081/api/answer', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({answer: payload})
      })
        .then(console.log('answer added'))
    },
    fetchTests: context => {
      fetch('http://localhost:8081/api/tests')
        .then(res => res.json())
        .then(data => {
          context.commit('fetchTests', data.tests)
        })
    }
  }
})
