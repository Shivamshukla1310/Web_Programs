//create_table.js
var mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Shivam@1310",
    database: "studentdb2"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE student(rollno int PRIMARY KEY,name VARCHAR(255) UNIQUE, percentage double)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

