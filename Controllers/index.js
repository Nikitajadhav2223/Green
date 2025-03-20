const productList=require('../Models/Products.json');

exports.getAllProducts = (req, res) => {
    res.status(200).json(productList);
}
exports.getProductsByTitle=(req,res)=>{
    const productTitle=req.params.Title;
    const product=productList.find(value=> value.Title==productTitle);

    if(product){
        res.status(200).json({product:product});
    }else{
        res.status(404).json({
            message:"Please provide valid Product Title"
        });
    }
}

exports.getProductsByType=(req,res)=>{
    const type =req.params.type;

    const filteredProduct=productList.filter(rest=>
        rest.type==type
    );

    if(filteredProduct.length>0){
        res.status(200).json({
           productList:filteredProduct
        });
    }else{
        res.status(404).json({
            message:"Please Provide valid type"
        })
    }
}

