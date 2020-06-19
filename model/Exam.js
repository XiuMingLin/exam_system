var db = require('../config/database');
var _ = require('underscore');

var Exam= function() {};


Exam.prototype.find  = function(examId , callback) {  //传入id 返回一行
    var sql = "SELECT * FROM Exam WHERE examId =?";
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
Exam.prototype.save = function(Examname,teaId,callback){
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
Exam.prototype.change = function(examid,isenable, callback) {
    var sql = "update Exam set isEnable = ? WHERE examId =? ";
    
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
      
        connection.query(sql, [examid,isenable], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
            connection.release();
        });
      

    });
};


Exam.prototype.dele = function( examId , callback) {
    var sql = "delete from Exam WHERE examId =? ";
   
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

module.exports = Exam;