const express = require('express')
const update = express.Router()
const stu = require('../dao/Stu_dao')
const tea = require('../dao/Tea_dao')


update.post('/update', (req,res)=>{
    const { oldpwd, newpwd, compwd } = req.body
    if(compwd == newpwd){
        if(req.session.type == 'stu'){
            const s = new stu()
            s.Stu_find(req.session.userId, (err, doc)=>{
                if(doc[0].userPwd == oldpwd){
                    s.Stu_change(newpwd, req.session.userId, (err, d)=>{
                        res.redirect('/student_welcome(login_success).html')
                    })
                }
            })
        }
        else if(req.session.type == 'tea'){
            const s = new tea()
            s.Tea_find(req.session.userId, (err, doc)=>{
                if(doc[0].userPwd == oldpwd){
                    s.Tea_change(newpwd, req.session.userId, (err, d)=>{
                        res.redirect('/student_welcome(login_success).html')
                    })
                }
            })
        }
    }
})

module.exports = update