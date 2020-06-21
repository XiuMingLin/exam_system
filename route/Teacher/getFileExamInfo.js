const officegen = require('officegen')
const Pro = require('../../dao/Pro_dao')
const iconv = require('iconv-lite')
const fs = require('fs')
var docx = officegen('docx')
const path = require('path')

module.exports = async(req, res)=>{
    const examId = req.query.examId
    var pro = new Pro()
    console.log(examId)
    
    pro.Pro_findbyeid(examId, (err, docs)=>{
        if(err){
            res.send('查询失败')
        }else{
            docx.on ( 'finalize', function ( written ) {
                console.log ( 'Finish to create Word file.\nTotal bytes created: ' + written + '\n' );
            });
            docx.on ( 'error', function ( err ) {
                console.log ( err );
            });
            var pObj = docx.createP()
            docs.forEach(element => {
                pObj = docx.createP()
                pObj.addText('问题ID:')
                pObj.addText(element.proId.toString())
                pObj.addText(' 分数:')
                pObj.addText(element.score.toString())
                pObj.addText(' 答案:')
                pObj.addText(element.answer.toString())
                pObj.addText(' 考试ID:')
                pObj.addText(element.examId.toString())
                pObj.addText(' 类型:')
                pObj.addText(element.type.toString())
            });
            var out = fs.createWriteStream(path.join(__dirname, '../../public/docs/out.docx'))
            out.on('error', (err)=>{
                console.log(err)
            })
            var result = docx.generate(out)
            res.writeHead(200, {
                "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                'Content-disposition': 'attachment; filename=out.docx'
            })
            docx.generate(res)
            //跳转主页
            //TODO
        }
    })
}