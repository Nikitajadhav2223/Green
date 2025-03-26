const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
        unique:true,
    },


    text:{
        type:String,
        required: true
    },

    img:{
        type: String,
        required: true
    },

    price:{
        type: Number,
        required: true
    },

    type: {
        type: String,
        required: true
    }

});
const Product = mongoose.model('GreenVeges', productSchema, 'GreenVeges'); // Explicitly setting 'Restaurants'

module.exports =Product;
