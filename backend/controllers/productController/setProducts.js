const Product = require('../../models/productModel')


const setProducts= async (req, res) => {
    const {productId,productName,productPrice,productCategory,productSubcategory,productDescription}=req.body;
    
    if (!productId || !productName || !productPrice) {
        return res.status(400).json({ error: "id,name,price fields are required." });
    }
    try {
        const productObj = {
            productId:productId,
            productName: productName,
            productPrice: productPrice,
            productCategory: productCategory,
            productSubcategory: productSubcategory,
            productDescription: productDescription
        }

        const newProduct = new Product(productObj)
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {setProducts};
