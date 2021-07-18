const newTableModel = require('../models/newTable.model')

// get all data
exports.getList = (req, res) => {
    console.log("data list");
    newTableModel.getAllData((err, newtable) => {
        if (err){
            console.log(err);
        };
        res.send(newtable);
    })
}