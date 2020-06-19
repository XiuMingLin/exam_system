var db = require('../config/database');
var _ = require('underscore');
//test

var Analyse= function() {};


Analyse.prototype.find  = function( examId, callback) {  //查询某一考试的分析
    var sql = "SELECT * FROM analyse WHERE examId=?";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query

        connection.query(sql, [examId], function(err, results) {
            if (err) {
                callback(true);
                return;
            }

            callback(false, results);
            connection.release();
        });
    });
};



Analyse.prototype.save = function(examId,callback){ //插入新的结果
    var sql = "INSERT INTO analyse SET examId= ?";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query

        connection.query(sql, [examId], function(err, results) {
            if (err) {
                callback(true);
                return;

            }
            callback(false, results);
            connection.release();
        });
    });
}

Analyse.prototype.change_score = function(examId,evasocre, callback) { //改平均成绩
    var sql = "update analyse set evasocre= ? WHERE examId=?";
    
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
      
        connection.query(sql, [examId,evasocre], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
            connection.release();
        });
      

    });
};


Analyse.prototype.change_result = function(examId,resu, callback) { //改成绩分析
    var sql = "update analyse set result= ? WHERE examId=?";
    
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
      
        connection.query(sql, [examId,resu], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
            connection.release();
        });
      

    });
};



module.exports = Analyse;