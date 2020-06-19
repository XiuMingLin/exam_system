const Analyse = require('../../model/Analyse')
const iconv = require('iconv-lite')

module.exports = async(req, res)=>{
    const examId = req.query.examId
    var analyse = new Analyse()
    console.log(examId)
    analyse.find(examId, (err, docs)=>{
        if(err){
            res.send('查询失败')
        }else{
            console.log(docs)
            res.send(docs)
        }
    })
}