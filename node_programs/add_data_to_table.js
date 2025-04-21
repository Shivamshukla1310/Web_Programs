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
    var sql = "INSERT INTO STUDENT (rollno, name, percentage) values (121,'Shukla ji',100.00), (122,'Riya',98.00), (123, 'Narendra',97.00)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Data Inserted");
    });
});

