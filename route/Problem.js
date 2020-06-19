const express = require('express')
const Problem = express.Router()

Problem.get('/getScore', require('./Problem/getScore'))

module.exports = Problem