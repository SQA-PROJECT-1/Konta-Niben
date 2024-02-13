const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: Number
    },
    userName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    userRole: {
        type: String,
        default: 'user'
    },
    cart: [{
        productId: Number,
        productName: String,
        productCategory: String,
        productPrice: Number
    }]
});

module.exports = mongoose.model('User', userSchema);