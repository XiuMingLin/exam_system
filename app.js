const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const template = require('art-template')
const db = require('./config/database');

app.use(bodyParser.urlencoded({extended : false}))

app.use(session({
    secret : 'secret key', 
    saveUninitialized : false,
    cookie : {
        maxAge : 24 * 60 * 60 * 1000
    }
}))

app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'art')
app.engine('art', require('express-art-template'))


app.use(express.static(path.join(__dirname, 'view')))

const Teacher = require('./route/Teacher')
const Student = require('./route/Student')
const Exam = require('./route/Exam')
const Problem = require('./route/Problem')
const login = require('./route/login')
const answer = require('./route/answer')
const update = require('./route/update')

app.use('/teacher', Teacher)
app.use('/student', Student)
app.use('/exam', Exam)
app.use('/problem', Problem)
app.use('/login', login)
app.use('/answer', answer)
app.use('/update', update)

app.listen(80)
console.log('server on')