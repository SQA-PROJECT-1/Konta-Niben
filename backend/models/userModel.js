
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userAddress: {
        type: String,
        required: true
    },
    userPhone: {
        type: String,
        required: true
    },
    cart: [
        {
            productId: {
                type: String,
                required: true
            },
            productName: {
                type: String,
                required: true
            },
            productCategory: {
                type: String,
                required: true
            },
            productPrice: {
                type: Number,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model('User', userSchema);
