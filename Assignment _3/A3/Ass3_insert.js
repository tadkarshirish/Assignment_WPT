let data={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"test",
    port:3306
};
const mysql=require("mysql2");
const con=mysql.createConnection(data);
let resourceId=103;
let resourcename="Well";
let status=true;
con.query("insert into resource (resourceId,resourcename,status) values (?,?,?)",[resourceId,resourcename,status],(err,res)=>{
    if(err){
        console.log("Error while inserting");
    }else{
        console.log("Rows Inserted");
    }
});