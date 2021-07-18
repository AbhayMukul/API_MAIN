// execute query here 

var db = require('../../config/db.config');

var newTable = (newtable) => {
    this.id = newtable.id;
    this.title = newtable.title;
}

// get all data
newTable.getAllData  = (result) =>{
    db.query(`SELECT * FROM newTable`,(err,res)=>{
        if(err) {
            console.log(err);
            result(null,err);
        }else{
            console.log("data retrieved successfully");
            result(null,res);
        }
    })
}

module.exports = newTable;