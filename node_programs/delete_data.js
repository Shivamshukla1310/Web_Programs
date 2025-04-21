//delete_student.js
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
    var sql = "DELETE FROM STUDENT WHERE rollno = 124;";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Record deleted");
        console.log(result);
    });
});
