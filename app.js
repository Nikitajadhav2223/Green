const express =require('express');

const mongoose = require('mongoose');
const routes = require('./Routes/index');

const app = express();



const port=8002;


//CORS issue will be solved  // Manual CORS Issue fixing
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Header','Content-Type, Authorization');
    next();
});

//npm i cors
app.use('/',routes);


mongoose.connect(
    'mongodb://127.0.0.1:27017/local',  // Specify your database name here
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(success => {
    console.log("✅ MongoDB Connected Successfully");

    app.listen(port, () => {
        console.log(`Server is running on ${port}`);
    });

}).catch(error => {
    console.log("❌ MongoDB Connection Error: " + error);
});



// app.listen(port,()=>{
//     console.log(`Server is running on ${port}`);
// });

//https://green-mcob.onrender.com/Products
//https://green-mcob.onrender.com/Products/Carrot
//https://green-mcob.onrender.com/getProductsByType/Roots