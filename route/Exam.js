const express = require('express')
const Exam = express.Router()

Exam.get('/addProblem', require('./Exam/addProblem'))

Exam.get('/delProblem', require('./Exam/delProblem'))

module.exports = Exam