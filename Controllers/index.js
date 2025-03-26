// const productList=require('../Models/Products.json');

// exports.getAllProducts = (req, res) => {
//     res.status(200).json(productList);
// }
// exports.getProductsByTitle=(req,res)=>{
//     const productTitle=req.params.Title;
//     const product=productList.find(value=> value.Title==productTitle);

//     if(product){
//         res.status(200).json({product:product});
//     }else{
//         res.status(404).json({
//             message:"Please provide valid Product Title"
//         });
//     }
// }

// exports.getProductsByType=(req,res)=>{
//     const type =req.params.type;

//     const filteredProduct=productList.filter(rest=>
//         rest.type==type
//     );

//     if(filteredProduct.length>0){
//         res.status(200).json({
//            productList:filteredProduct
//         });
//     }else{
//         res.status(404).json({
//             message:"Please Provide valid type"
//         })
//     }
// }







// const productList=require('../Models/Products')

// const getAllProducts = async (req, res) => {
//     try {
//       res.json({ message: "Fetching all products..." });
//     } catch (error) {
//       res.status(500).json({ message: "Error fetching products", error });
//     }
//   };
  
//   const getProductsByTitle = async (req, res) => {
//     try {
//       const title = req.params.Title;
//       res.json({ message: `Fetching product with title: ${title}` });
//     } catch (error) {
//       res.status(500).json({ message: "Error fetching product by title", error });
//     }
//   };
  
//   const getProductsByType = async (req, res) => {
//     try {
//       const type = req.params.type;
//       res.json({ message: `Fetching product with type: ${type}` });
//     } catch (error) {
//       res.status(500).json({ message: "Error fetching product by type", error });
//     }
//   };
  
//   // Export all functions
//   module.exports = {
//     getAllProducts,
//     getProductsByTitle,
//     getProductsByType,
//   };
  



// // const restaurantList = require("../Models/restaurants.json");
// const productList = require('../Models/Products'); 
// // const mealTypes = require("../Models/mealtypes.json");

// // const Restaurant = require('../Models/Restaurants'); 

// exports.getAllProducts = (req, res) => {
//     // Query the database to fetch all restaurants
//     productList.find()
//         .then((productList) => {
//             // console.log("restaurant--->>>>",restaurantList)
//             // Check if restaurants are found and return them
//             if (productList && productList.length > 0) {
//                 res.status(200).json(productList);  // Send the restaurant data in the response
//             } else {
//                 res.status(404).json({ message: 'No products found' });
//             }
//         })
//         .catch((error) => {
//             console.error('Error fetching products:', error);
//             res.status(500).json({ message: 'Error fetching products', error: error.message });
//         });
// };



// // exports.getRestaurantById = (req, res) => {
// //     const restaurantId = req.params.id;
// //     const restaurant = restaurantList.findById(value =>  value.id == restaurantId);

// //     if (restaurant) {
// //         res.status(200).json({ restaurant: restaurant });
// //     } else {
// //         res.status(404).json({
// //             message: "Please provide valid restaurant ID"
// //         });
// //     }
// // }

// // exports.getRestaurantById = async (req, res) => {
// //     const restaurantId = req.params.id;

// //     try {
// //         const restaurant = await restaurantList.findById(restaurantId);
        
// //         if (restaurant) {
// //             res.status(200).json({ restaurant: restaurant });
// //         } else {
// //             res.status(404).json({
// //                 message: "Restaurant not found"
// //             });
// //         }
// //     } catch (error) {
// //         console.error('Error fetching restaurant by ID:', error);
// //         res.status(500).json({
// //             message: 'Error fetching restaurant by ID',
// //             error: error.message
// //         });
// //     }
// // };



// exports.getProductByTitle = async (req, res) => {
//     const productTitle = req.params.Title;

//     // console.log('====================================');
//     // console.log("restaurantId---->>>", restaurantId);
//     // console.log('====================================');

//     try {
//         // Since your restaurant's 'id' is a number, search by that custom field.
//         const product = await productList.findOne({ Title: parseInt(productTitle) });

//         if (product) {
//             res.status(200).json({ product: product });
//         } else {
//             res.status(404).json({
//                 message: "Product not found"
//             });
//         }
//     } catch (error) {
//         console.error('Error fetching product by Title:', error);
//         res.status(500).json({
//             message: 'Error fetching product by Title',
//             error: error.message
//         });
//     }
// };


// exports.getProductsByType = (req, res) => {
//     const city = req.params.city;

    
//     // Query the database for restaurants that match the city
//     productList.find({ type: { $regex: type, $options: 'i' } })  // This uses case-insensitive regex to match city
//         .then((filteredProducts) => {
           

//             if (filteredProducts.length > 0) {
//                 res.status(200).json({ productList: filteredProducts});
//             } else {
//                 res.status(404).json({
//                     message: "No products found for the provided type"
//                 });
//             }
//         })
//         .catch((error) => {
//             console.error('Error fetching products by type:', error);
//             res.status(500).json({
//                 message: 'Error fetching products',
//                 error: error.message
//             });
//         });
// };
// // exports.getAllMealTypes((req, res) => {
// //     // send back the mealtypes
// // });



const productList = require('../Models/Products');

exports.getAllProducts = (req, res) => {
    // Query the database to fetch all products
    productList.find()
        .then((products) => {
            if (products && products.length > 0) {
                res.status(200).json(products);  // Send the product data in the response
            } else {
                res.status(404).json({ message: 'No products found' });
            }
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
            res.status(500).json({ message: 'Error fetching products', error: error.message });
        });
};

exports.getProductByTitle = async (req, res) => {
    const productTitle = req.params.Title;

    try {
        // Search for a product by title (case-insensitive)
        const product = await productList.findOne({ Title: { $regex: `^${productTitle}$`, $options: 'i' } });

        if (product) {
            res.status(200).json({ product });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        console.error('Error fetching product by Title:', error);
        res.status(500).json({ message: 'Error fetching product by Title', error: error.message });
    }
};

exports.getProductsByType = (req, res) => {
    const type = req.params.type;

    // Query the database for products that match the type
    productList.find({ type: { $regex: type, $options: 'i' } })  // Case-insensitive type search
        .then((filteredProducts) => {
            if (filteredProducts.length > 0) {
                res.status(200).json({ productList: filteredProducts });
            } else {
                res.status(404).json({ message: "No products found for the provided type" });
            }
        })
        .catch((error) => {
            console.error('Error fetching products by type:', error);
            res.status(500).json({ message: 'Error fetching products', error: error.message });
        });
};
