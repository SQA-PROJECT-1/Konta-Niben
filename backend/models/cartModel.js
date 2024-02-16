// models/Wishlist.js

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: Number,
    ref: 'User',
    required: true
  },
  productId: {
    type: Number,
    ref: 'Product',
    required: true
  }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;