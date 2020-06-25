const express = require('express')
const login = express.Router()

login.get('/index', (req, res)=>{
    res.redirect('/student_login.html')
})

module.exports = login