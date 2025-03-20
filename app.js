const express =require('express');

const routes = require('./Routes/index');

const app = express();

// const path=require("path");

const port=8002;


// app.use("/images", express.static(path.join(__dirname, "Images")));

//CORS issue will be solved  // Manual CORS Issue fixing
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Header','Content-Type, Authorization');
    next();
});

//npm i cors
app.use('/',routes);

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});