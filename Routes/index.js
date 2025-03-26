//create some routes which can receive the income request

const express=require('express');
const router = express.Router();

const controller=require('../Controllers/index');

router.get('/Products', controller.getAllProducts);

router.get('/Products/:Title', controller.getProductByTitle);

 router.get('/getProductsByType/:type', controller.getProductsByType);


  

module.exports=router;



// const express = require('express');
// const router = express.Router();
// const controller = require('../Controllers/index'); // Ensure correct import path

// // Debugging logs
// console.log("Controller Import:", controller);
// console.log("getAllProducts:", controller.getAllProducts);
// console.log("getProductsByTitle:", controller.getProductsByTitle);
// console.log("getProductsByType:", controller.getProductsByType);

// if (!controller.getAllProducts || !controller.getProductsByTitle || !controller.getProductsByType) {
//   throw new Error("One or more controller functions are not defined!");
// }

// router.get('/Products', controller.getAllProducts);
// router.get('/Products/:Title', controller.getProductsByTitle);
// router.get('/getProductsByType/:type', controller.getProductsByType);

// module.exports = router;
