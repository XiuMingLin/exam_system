const Pro = require('../../model/Pro')
const iconv = require('iconv-lite')

module.exports = async(req, res)=>{
    const examId = req.query.examId
    var pro = new Pro()
    console.log(examId)
    pro.findbyeid(examId, (err, docs)=>{
        if(err){
            res.send('查询失败')
        }else{
            res.json(docs)
        }
    })
}