const Exam = require('../../dao/Exam_dao')
const iconv = require('iconv-lite')

module.exports = async(req, res)=>{
    // console.log('addexam');
    const { examId, isEnable } = req.query
    var exam = new Exam()
    console.log(examId)
    console.log(isEnable)
    exam.Exam_change(iconv.encode(examId, 'utf8'), iconv.encode(isEnable, 'utf8'), (err)=>{
        if(err){
            res.send('启用失败')
        }else{
            res.send('启用成功')
        }
    })
}