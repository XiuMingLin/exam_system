const Exam = require('../../dao/Exam_dao')
const iconv = require('iconv-lite')

module.exports = async(req, res)=>{
    // console.log('addexam');
    const { examName, teaId } = req.body
    var exam = new Exam()
    console.log(examName)
    console.log(teaId)
    exam.Exam_save(iconv.encode(examName, 'utf8'), iconv.encode(teaId, 'utf8'), (err)=>{
        if(err){
            res.send('添加失败')
        }else{
            res.send('添加成功')
        }
    })
}