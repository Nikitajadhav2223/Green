//create some routes which can receive the income request

const express=require('express');
const router = express.Router();

const controller=require('../Controllers/index');

router.get('/Products', controller.getAllProducts);

router.get('/Products/:Title', controller.getProductsByTitle);

 router.get('/getProductsByType/:type', controller.getProductsByType);


  

module.exports=router;