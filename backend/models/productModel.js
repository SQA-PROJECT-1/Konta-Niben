const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type: Number,
        required: true
    },
    productName: {
        type: String
    },
    productPrice: {
        type: Number
    },
    productCategory: {
        type: String
    },
    productSubcategory: {
        type: String
    },
    productDescription: {
        type: String
    },
    availability: {
        type: String,
        enum: ['instock', 'stockout'],
        default: 'instock'
    },
    productBrandName: {
        type: String
    },
    productQuantity:{
        type: Number
    },
    rating: {
        type: Number,
        default: 0 
    }
});

module.exports = mongoose.model('Product', productSchema);
