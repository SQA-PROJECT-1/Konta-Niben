const Product = require('../models/productModel')


const setProducts= async (req, res) => {
    const {product_id,product_name,product_price}=req.body;
    
    if (!product_id || !product_name || !product_price) {
        return res.status(400).json({ error: "id,name,price fields are required." });
    }
    try {
        const productObj = {
            product_id:product_id,
            product_name: product_name,
            product_price: product_price
        }

        const newProduct = new Product(productObj)
        await newProduct.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getProducts = async(req,res)=>{
    res.send("Kj krtese")
}
module.exports = { setProducts,getProducts};