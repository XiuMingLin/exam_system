const Pro = require('../../dao/Pro_dao')
const iconv = require('iconv-lite')

module.exports = async(req, res)=>{
    const { proId } = req.query
    var pro = new Pro()
    pro.Pro_dele(proId, (err)=>{
        if(err){
            res.send('删除失败')
        }else{
            res.send('删除成功')
        }
    })
}