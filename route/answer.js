const express = require('express')
const answer = express.Router()
const Exam = require('../dao/Exam_dao')

answer.get('/answer', (req, res)=>{
    const exam = new Exam()
    exam.Exam_find2((err, docs)=>{
        console.log(docs)
        res.render('student_answer', {
            res : docs
        })
    })
})

module.exports = answer