const Product = require('../../models/productModel')

const getProducts = async(req,res)=>{
    try{
     const products = await Product.find()
     res.status(200).json(products)
    }
    catch(error) {
     res.status(500).json("Server error")
    }
 }

module.exports = {getProducts};