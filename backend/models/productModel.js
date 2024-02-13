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
    }
});

module.exports = mongoose.model('Product', productSchema);
