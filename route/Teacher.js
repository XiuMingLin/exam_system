const express = require('express')
const Teacher = express.Router()

Teacher.post('/addExam', require('./Teacher/addExam'))

Teacher.get('/sendExam', require('./Teacher/sendExam'))

Teacher.get('/getExamInfo', require('./Teacher/getExamInfo'))

Teacher.get('/printExamInfo', require('./Teacher/printExamInfo'))

Teacher.get('/getFileExamInfo', require('./Teacher/getFileExamInfo'))

Teacher.get('/showAnalysizes', require('./Teacher/showAnalysizes'))

module.exports = Teacher