var db = require('../config/database');
var _ = require('underscore');

var Result= function() {};


Result.prototype.find1  = function( examId,stuId, callback) {  //查询单个人的某一考试的成绩
    var sql = "SELECT * FROM result WHERE examId=?,stuId=?";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query

        connection.query(sql, [examId,stuId], function(err, results) {
            if (err) {
                callback(true);
                return;
            }

            callback(false, results);
            connection.release();
        });
    });
};

Result.prototype.find2  = function(stuId, callback) {  //查询单个人的所有成绩
    var sql = "SELECT * FROM result WHERE stuId =?";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query

        connection.query(sql, [stuId], function(err, results) {
            if (err) {
                callback(true);
                return;
            }

            callback(false, results);
            connection.release();
        });
    });
};

Result.prototype.find3  = function(examId , callback) {  //查询一个考试所有人的成绩
    var sql = "SELECT * FROM result WHERE examId =?";
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


Result.prototype.save = function(examId,stuId,score,callback){ //插入新的结果
    var sql = "INSERT INTO result SET examId= ?,stuId= ?,score= ?";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query

        connection.query(sql, [examId,stuId,score], function(err, results) {
            if (err) {
                callback(true);
                return;

            }
            callback(false, results);
            connection.release();
        });
    });
}

Result.prototype.change = function(examId,stuId,score, callback) { //改成绩
    var sql = "update result set score= ? WHERE examId=? and stuId=?";
    
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
      
        connection.query(sql, [examId,stuId,score], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
            connection.release();
        });
      

    });
};



module.exports = Result;