const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const db = require('./config/database');

app.use(bodyParser.urlencoded({extended : false}))

app.use(session({
    secret : 'secret key', 
    saveUninitialized : false,
    cookie : {
        maxAge : 24 * 60 * 60 * 1000
    }
}))

app.use(express.static(path.join(__dirname, 'public')))

const Teacher = require('./route/Teacher')
const Student = require('./route/Student')
const Exam = require('./route/Exam')
const Problem = require('./route/Problem')

app.use('/teacher', Teacher)
app.use('/student', Student)
app.use('/exam', Exam)
app.use('/problem', Problem)

app.listen(80)
console.log('server on')