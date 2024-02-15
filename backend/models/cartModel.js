const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    productId: {
        type: String
    }
});

module.exports = mongoose.model('Cart', cartSchema);
