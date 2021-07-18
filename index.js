const express = require('express');

// creating express app
const app = express();

// setup the server port
const port = process.env.PORT || 3000;

// import routes
const newTableRoute = require('./src/routes/newTable.route');

// root route defination
app.get('/',(req,res) => {
    res.send("Hello");
})

// listen to port 
app.listen(port,()=>{
    console.log(`server listening to port ${port}`);
})

// create newTable route
app.use('/api/newTable',newTableRoute);