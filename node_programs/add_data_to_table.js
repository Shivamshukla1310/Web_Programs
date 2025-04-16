//create_table.js
var mysql = require('mysql2');//
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Shivam@1310",
    database: "studentdb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO STUDENT (rollno, name, percentage) values (121,'Kiara', 98.22) , (122, 'Shivu', 84.56), (123, 'Nandri', 80.55);";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Data Inserted");
    });
});

