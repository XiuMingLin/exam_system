const express = require('express')
const Student = express.Router()
const Res = require('../dao/Result_dao')

Student.get('/addExam', require('./Student/addExam'))

Student.get('/getExamInfo', require('./Student/getExamInfo'))

Student.get('/printExamInfo', require('./Student/printExamInfo'))

Student.get('/getFileExamInfo', require('./Student/getFileExamInfo'))

Student.get('/findscore', require('./Student/findsocre'))

Student.get('/ans', (req, res)=>{
    const { score } = req.query
    const result = new Res()
    console.log(score)
    result.Result_save(1, req.session.userId, score, (err, docs)=>{
        res.redirect('/student_welcome(login_success).html')
    })
})

module.exports = Student