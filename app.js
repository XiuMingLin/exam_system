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


db.pool.getConnection((err, conn)=>{
    if(err){
        console.log(err)
    }else{
        conn.query("select * from stu", (qerr, vals, fields)=>{
            conn.release()
            console.log(vals);
        })
    }
})

app.listen(80)
console.log('server on')