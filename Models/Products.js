const mongoose = require('mongoose');

const product = new mongoose.Schema({
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

module.exports = mongoose.model('product', product)