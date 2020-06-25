var db = require('../config/database');
var _ = require('underscore');

var Tea_dao = function() {};


Tea_dao.prototype.Tea_find  = function(username, callback) {  //传入id 返回一行
    var sql = "SELECT * FROM tea WHERE userId=?";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query

        connection.query(sql, [username], function(err, results) {
            if (err) {
                callback(true);
                return;
            }

            callback(false, results);
            connection.release();
        });
    });
};
Tea_dao.prototype.Tea_save = function(username, password, teaname, callback){
    var sql = "INSERT INTO tea SET userId= ?, userPwd= ?, teaName = ?";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query

        connection.query(sql, [username,password,teaname], function(err, results) {
            if (err) {
                callback(true);
                return;

            }
            callback(false, results);
            connection.release();
        });
    });
}
Tea_dao.prototype.Tea_change = function(newpwd, username, callback) {
    var sql = "update tea set userPwd= ? WHERE userId=? ";
   
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
      
        connection.query(sql, [newpwd,username], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
            connection.release();
        });
      

    });
};


Tea_dao.prototype.dele = function(account_number, callback) {
    var sql = "delete from tea WHERE userId=? ";
   
  
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
      
        connection.query(sql, [account_number], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
            connection.release();
        });
      

    });
};

module.exports = Tea_dao;