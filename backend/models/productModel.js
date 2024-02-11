const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
      product_id : {
        type:String,
        required: true
      },
      product_name :{
        type: String
      },
      product_price: {
        type: String
      }
})

module.exports = mongoose.model("product",productSchema)