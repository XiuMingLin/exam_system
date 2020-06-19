const Exam = require('../../model/Exam')
const iconv = require('iconv-lite')

module.exports = async(req, res)=>{
    // console.log('addexam');
    const { examName, teaId } = req.body
    var exam = new Exam()
    console.log(examName)
    console.log(teaId)
    exam.save(iconv.encode(examName, 'utf8'), iconv.encode(teaId, 'utf8'), (err)=>{
        if(err){
            res.send('添加失败')
        }else{
            res.send('添加成功')
        }
    })
}