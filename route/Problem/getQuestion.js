const Pro = require('../../model/Pro')
const iconv = require('iconv-lite')

module.exports = async(req, res)=>{
    const { proId } = req.query
    var pro = new Pro()

    pro.findbypid(proId, (err, docs)=>{
        if(err){
            res.send('查询失败')
        }else{
            //TODO
            // res.send(docs[0]..toString());
        }
    })
}