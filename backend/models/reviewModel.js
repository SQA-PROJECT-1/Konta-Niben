const mongoose = require('mongoose');

const productReviewSchema = new mongoose.Schema({
    productId: {
        type:Number,
        required: true,
        ref: 'Product' // Assuming you have a Product model for products
    },
    userId: {
        type: Number,
        required: true,
        ref: 'User' // Assuming you have a User model for users
    },
    message: {
        type: String,
        required: true
    }
});

const ProductReview = mongoose.model('ProductReview', productReviewSchema);

module.exports = ProductReview;
