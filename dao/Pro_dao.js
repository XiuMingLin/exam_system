var db = require('../config/database');
var _ = require('underscore');

var Pro_dao = function() {};


Pro_dao.prototype.Pro_findbypid  = function(proId, callback) {  //传入id 返回一行
    var sql = "SELECT * FROM pro WHERE proId=?";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query

        connection.query(sql, [proId], function(err, results) {
            if (err) {
                callback(true);
                return;
            }

            callback(false, results);
            connection.release();
        });
    });
};

Pro_dao.prototype.Pro_findbyeid  = function(examId, callback) {  //传入id 返回一行
    var sql = "SELECT * FROM pro WHERE examId=?";
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


Pro_dao.prototype.Pro_save = function(examId, answer, score, type, prob, callback){
    var sql = "INSERT INTO pro SET examId= ?,answer= ?,score= ?,type= ?,prob = ?";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query

        connection.query(sql, [examId,answer,score,type,prob,examId], function(err, results) {
            if (err) {
                callback(true);
                return;

            }
            callback(false, results);
            connection.release();
        });
    });
}


Pro_dao.prototype.Pro_dele = function(proId, callback) {
    var sql = "delete from pro WHERE proId=? ";
   
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
      
        connection.query(sql, [proId], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
            connection.release();
        });
      

    });
};

module.exports = Pro_dao;