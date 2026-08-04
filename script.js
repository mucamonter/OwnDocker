
let mysql = require("mysql2");



let con = mysql.createConnection({
    host: process.env.DB_HOST, password: process.env.DB_PASSWORD, user: process.env.DB_USER=process.env.DB_USER, database: process.env.DB_NAME
});

function TestCon(){
    con.connection(function(err){
        if (err) throw err;

        console.log("Connected")
    })
}