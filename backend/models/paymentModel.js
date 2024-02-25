const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    ref: 'User',
  },
  transactionId: {
    type: Number,
    required: true
  },
  paymentStatus:{
    type:Boolean,
    default:false,
  }
},{
  timestamps:true,
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;