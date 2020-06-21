var db = require('../config/database');
var _ = require('underscore');

var Exam_dao= function() {};


Exam_dao.prototype.Exam_find  = function(examId , callback) {  //传入id 返回一行
    var sql = "SELECT * FROM exam WHERE examId =?";
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
Exam_dao.prototype.Exam_save = function(Examname, teaId, callback){
    var sql = "INSERT INTO exam SET examName = ?, teaId = ?";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query

        connection.query(sql, [Examname,teaId], function(err, results) {
            if (err) {
                callback(true);
                return;

            }
            callback(false, results);
            connection.release();
        });
    });
}
Exam_dao.prototype.Exam_change = function(examid, isenable, callback) {
    var sql = "update exam set isEnable = ? WHERE examId =? ";
    
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
      
        connection.Exam_query(sql, [examid,isenable], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
            connection.release();
        });
      

    });
};


Exam_dao.prototype.Exam_dele = function(examId , callback) {
    var sql = "delete from exam WHERE examId =? ";
   
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
      
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

module.exports = Exam_dao;