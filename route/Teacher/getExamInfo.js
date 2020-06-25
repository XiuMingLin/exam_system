const Pro = require('../../dao/Pro_dao')
const iconv = require('iconv-lite')

module.exports = async(req, res)=>{
    const examId = req.query.examId
    var pro = new Pro()
    console.log(examId)
    pro.Pro_findbyeid(examId, (err, docs)=>{
        if(err){
            res.send('查询失败')
        }else{
            res.json(docs)
        }
    })
}