const Result = require('../../model/Result')
const iconv = require('iconv-lite')

module.exports = async(req, res)=>{
    // console.log('addexam');
    const { examId, stuId, score } = req.query
    var result = new Result()
    console.log(examId)
    console.log(stuId)
    console.log(score)
    result.save(examId, stuId, score, (err)=>{
        if(err){
            res.send('添加失败')
        }else{
            res.send('添加成功')
        }
    })
}