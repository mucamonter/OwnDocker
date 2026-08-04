//call driver
let mysql = require("mysql2");

console.log(process.env.DB_PASSWORD);
 
//create connection
let con = mysql.createConnection({
    host: "localhost",
    password: "Muca@Mont",
    user: "murilomonteiro",
    database: "wk4_db"});

  //verify erros

  con.connect(function(err){
    if (err) throw err;
    
    //(else:)
    console.log("Connected!");
  });
  //--err is a global variable--



//scan text

  //verify it's aren't empty space
  

//save  text

//show text

