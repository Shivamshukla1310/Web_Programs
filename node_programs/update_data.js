//update_student.js
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
    var sql = "UPDATE STUDENT SET percentage = 35.00 WHERE rollno = 124;";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Record updated");
        console.log(result);
    });
});
