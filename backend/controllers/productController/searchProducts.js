const Product = require('../../models/productModel')

const searchProducts = async(req,res)=>{
    try {
        const { productName, productCategory } = req.body

        const pipeline = [];

        if(productName.length > 0 || productCategory > 0) {
            const matchCondition = {};

            if (productCategory.length > 0) {
                matchCondition.productCategory = productCategory;
            }

            if(productName.length > 0) {
                const cleanedProductName = productName.replace(/\s+/g, ' ').trim();

                matchCondition.productName = { $regex: new RegExp(cleanedProductName, 'i') };
            }

            pipeline.push({
                $match: matchCondition
            });

            if(pipeline.length > 0) {
                const result = await Product.aggregate(pipeline);
                res.json(result);
            }
            else {
                const allProducts = await Product.find();
                res.json(allProducts)
            }
        }
    } catch (error) {
        res.status(500).json("Internal server error")
    }
}


module.exports = {searchProducts};