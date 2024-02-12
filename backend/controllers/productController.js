const Product = require('../models/productModel')


const setProducts= async (req, res) => {
    const {productId,productName,productPrice}=req.body;
    
    if (!productId || !productName || !productPrice) {
        return res.status(400).json({ error: "id,name,price fields are required." });
    }
    try {
        const productObj = {
            productId:productId,
            productName: productName,
            productPrice: productPrice
        }

        const newProduct = new Product(productObj)
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getProducts = async(req,res)=>{
   try{
    const products = await Product.find()
    res.status(200).json(products)
   }
   catch(error) {
    res.status(500).json("Server error")
   }
}

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

const updateProducts = async(req,res)=>{
    try{
       const id = parseInt(req.params.productId)
       console.log(id)
       const product = req.body
       const updatedProduct = await Product.findOneAndUpdate({productId:id},product,{new:true})
       res.status(200).json(updatedProduct);     
    }
    catch(error) {
        res.status(500).json("Enternal server error")
    }
}
module.exports = { setProducts,getProducts,deleteProducts,updateProducts};