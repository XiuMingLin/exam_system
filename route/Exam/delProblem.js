const Pro = require('../../model/Pro')
const iconv = require('iconv-lite')

module.exports = async(req, res)=>{
    const { proId } = req.query
    var pro = new Pro()
    pro.dele(proId, (err)=>{
        if(err){
            res.send('删除失败')
        }else{
            res.send('删除成功')
        }
    })
}