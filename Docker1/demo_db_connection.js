let mysql = require('mysql2');
//without mysql2 it dosen't work

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Muca@Mont"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected");
});

mysql.createConnection.

