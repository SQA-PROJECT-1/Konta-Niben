// models/Wishlist.js

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
    ref: 'User',
  },
  productId: {
    type: Number,
    ref: 'Product',
    required: true
  }
  // paymentStatus:{
  //   type:Boolean,
  //   default:false,
  // },
  // transactionId:{
  //   type:String,
  // }
},{
  timestamps:true,
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;