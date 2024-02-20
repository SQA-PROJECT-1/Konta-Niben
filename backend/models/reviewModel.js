const mongoose = require('mongoose');

const productReviewSchema = new mongoose.Schema({
    productId: {
        type: Number,
        ref: 'Product',
        required: true,
    },
    userId: {
        type: Number,
        ref: 'User',
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
});

// Create a compound index to ensure uniqueness of userId for a specific productId
productReviewSchema.index({ productId: 1, userId: 1 }, { unique: true });

const ProductReview = mongoose.model('ProductReview', productReviewSchema);

module.exports = ProductReview;
