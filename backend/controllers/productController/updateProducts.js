const Product = require('../../models/productModel')

const updateProducts = async(req,res)=>{
    try{
       const id = parseInt(req.params.productId)
       const product = req.body
       const updatedProduct = await Product.findOneAndUpdate({productId:id},product,{new:true})
       res.status(200).json(updatedProduct);     
    }
    catch(error) {
        res.status(500).json("Enternal server error")
    }
}
module.exports = {updateProducts};