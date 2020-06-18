var db = require('../config/database');
var _ = require('underscore');

var Stu = function() {};


Tea.prototype.find  = function(username, callback) {  //传入id 返回一行
    var sql = "SELECT * FROM Stu WHERE userId=?";
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
Tea.prototype.save = function(username,password,teaname,callback){
    var sql = "INSERT INTO Tea SET userId= ?, userPwd= ?, teaName = ?";
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
Tea.prototype.change = function(newpwd,account_number, callback) {
    var sql = "update Tea set userPwd= ? WHERE userId=? ";
   
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
      
        connection.query(sql, [newpwd,account_number], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
            connection.release();
        });
      

    });
};


Tea.prototype.dele = function(account_number, callback) {
    var sql = "delete from Tea WHERE userId=? ";
   
  
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

module.exports = Tea;