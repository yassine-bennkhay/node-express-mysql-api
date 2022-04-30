
//bring in the mysql module
const mysql = require('mysql');
const connectToDB=mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'yassine2000',
    database : 'node_mysql'
    
});
//Connect
connectToDB.connect((err)=>{
if(err){
    throw err;
}
console.log("MySql connected...")
})
module.exports=connectToDB;