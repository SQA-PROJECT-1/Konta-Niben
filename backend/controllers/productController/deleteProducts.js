const Product = require('../../models/productModel')

const deleteProducts = async(req,res)=>{
    try{
        const id = req.params.productId
        const products = await Product.findOneAndDelete({productId:id})
        if(!products) {
            return res.status(404).json("product not fount")
        }
        res.status(200).json(products)
    }
    catch(error) {
        res.status(500).json("Enternal server error")
    }
}


module.exports = {deleteProducts};
