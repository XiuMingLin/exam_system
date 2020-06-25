const Result = require('../../dao/Result_dao')
const Exam = require('../../dao/Exam_dao')

module.exports = async(req, res)=>{
    // console.log('addexam');
    const stuId = req.session.userId
    var result = new Result()
    const exam = new Exam()
    // console.log(req.session.userId)
    var mes = []
    result.Result_find2(stuId, (err, docs)=>{
        // docs.forEach(element => {
        //     exam.Exam_find(docs[0].examId, (err, d)=>{
        //         mes.push({
        //             name : d[0].examName,
        //             score : element.score
        //         })
        //     })
        // });
        // console.log(mes)
        // res.render('student_mark', {
        //     res : mes
        // })
        res.render('student_mark', {
            res : docs
        })
    })
    
}