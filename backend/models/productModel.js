const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
      product_id : {
        type:Number,
        required: true
      },
      product_name :{
        type: String
      },
      product_price: {
        type: Number
      }
})

module.exports = mongoose.model("product",productSchema)