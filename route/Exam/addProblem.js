const Pro = require('../../dao/Pro_dao')
const iconv = require('iconv-lite')

module.exports = async(req, res)=>{
    const { proId, examId, answer, score, type } = req.query
    var pro = new Pro()
    pro.Pro_save(proId, examId, answer, score, type, (err)=>{
        if(err){
            res.send('添加失败')
        }else{
            res.send('添加成功')
        }
    })
}