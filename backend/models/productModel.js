const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
      productId : {
        type:Number,
        required: true
      },
      productName :{
        type: String
      },
      productPrice: {
        type: Number
      }
})

module.exports = mongoose.model("product",productSchema)