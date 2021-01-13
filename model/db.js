var mysql=require('mysql');
var db=mysql.createConnection({
    host: "freedb.tech",
    user: "freedbtech_carowebnangcao",
    password: "caro482509528",
    database: "freedbtech_caro",
  });
  db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else
    {
      console.log('Mysql Connected')
    }
})

module.exports=db;