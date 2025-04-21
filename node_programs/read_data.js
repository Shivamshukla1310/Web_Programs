//create_table.js
var mysql = require('mysql2');//
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Shivam@1310",
    database: "studentdb2"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM STUDENT;";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

