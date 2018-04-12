const express  = require('express')
const router   = express.Router()
const tests = require('../models/tests.js')

let username = ''
let chosenTest = ''
let userAnswers = []

router.get('/api/tests', (req, res) => { // GET ROUTE
  res.send({tests})
})

router.post('/api/username', (req, res) => { // POST ROUTE
  console.log('username is:', req.body.username)
  username = req.body.username
  // res.json({data: req.body.username})
})

router.post('/api/chosen_test', (req, res) => { // POST ROUTE
  console.log('user chose test:', req.body.chosenTest)
  chosenTest = req.body.chosenTest
})

router.post('/api/answer', (req, res) => { // POST ROUTE
  console.log('answer is:', req.body.answer)
  userAnswers.push(req.body.answer)
  res.json({data: req.body.username})
  console.log(userAnswers)
})

router.get('/api/results', (req, res) => { // GET ROUTE
  res.send({tests})
})

module.exports = router