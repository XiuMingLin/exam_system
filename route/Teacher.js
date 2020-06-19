const express = require('express')
const Teacher = express.Router()

Teacher.post('/addExam', require('./Teacher/addExam'))

module.exports = Teacher