const express =require('express');
require('dotenv').config();
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


// mongoose.connect(
//     // 'mongodb://127.0.0.1:27017/local',  // Specify your database name here


//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// ).then(success => {
//     console.log("✅ MongoDB Connected Successfully");

//     app.listen(port, () => {
//         console.log(`Server is running on ${port}`);
//     });

// }).catch(error => {
//     console.log("❌ MongoDB Connection Error: " + error);
// });


// Database Connection
mongoose.connect( process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// Start Server
const PORT = process.env.PORT || 8002;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));



// app.listen(port,()=>{
//     console.log(`Server is running on ${port}`);
// });

//https://green-mcob.onrender.com/Products
//https://green-mcob.onrender.com/Products/Carrot
//https://green-mcob.onrender.com/getProductsByType/Roots