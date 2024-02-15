const Product = require('../../models/productModel')

const getProductsById = async(req,res)=>{
    try{
        const id = req.params.productId;
        const product = await Product.findOne({ productId: id });
        res.status(200).json(product)
    }
    catch(error) {
        res.status(500).json(error)
    }
}

module.exports = {getProductsById}