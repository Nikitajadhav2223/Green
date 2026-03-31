//create some routes which can receive the income request

const express=require('express');
const router = express.Router();

const controller=require('../Controllers/index');

router.get('/Products', controller.getAllProducts);

router.get('/Products/:Title', controller.getProductByTitle);

router.get('/getProductsByType/:type', controller.getProductsByType);


router.post('/SignUp', controller.signup);

router.post("/login", controller.login);

  

module.exports=router;

