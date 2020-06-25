const express = require('express')
const login = express.Router()
const stu = require('../dao/Stu_dao')
const tea = require('../dao/Tea_dao')

login.get('/index', (req, res)=>{
    res.redirect('/student_login.html')
})

login.post('/login', (req,res)=>{
    const { username, password, type } = req.body
    console.log(username)
    console.log(password)
    if(type == 0){
        console.log(type)
        const s = new stu()
        s.Stu_find(username, (err, docs)=>{
            console.log(docs)
            if(docs == null){
                res.send('用户不存在')
            }else{
                if(docs[0].userPwd == password){
                    res.redirect('/student_welcome(login_success).html')
                }
            }
        })
    }else if(type == 1){
        const t = new tea()
        t.Tea_find(username, (err, docs)=>{
            if(docs == null){
                res.send('用户不存在')
            }else{
                if(docs[0].userPwd == password){
                    res.redirect('/login/index')
                }
            }
        })
    }
})

module.exports = login