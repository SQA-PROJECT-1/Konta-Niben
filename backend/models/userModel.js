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
      userPassword:{
        type: String,
        required: true
      }
})

module.exports = mongoose.model('User', userSchema);