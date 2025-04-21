//b) Create a Node.js file that demonstrate create database student DB and student table (Rno, Sname,Percentage ) 
// in MySQL.

//create_db.js
var mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Shivam@1310"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE studentdb2", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});

