const mysql = require('mysql');

// mysql connection
var db = mysql.createConnection({
    host: "database-1.cyc2ywmoxfol.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "admin1234",
    database: "myDB"
});

// check db connection
db.connect((err) => {
    if (err) throw err;
    else {
        console.log("database conected");
    }
})

// making var db availabe outside db.config.js
module.exports = db;