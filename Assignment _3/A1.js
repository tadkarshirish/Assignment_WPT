const url="";
let data={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"test",
    port:3306
};
const mysql =require('mysql2');
const con=mysql.createConnection(data);

console.log("Database Connected");