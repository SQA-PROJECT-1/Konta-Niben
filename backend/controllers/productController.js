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
        const id = req.params.product_id
        const products = await Product.findOneAndDelete({product_id:id})
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
       const id = parseInt(req.params.product_id)
       const product = req.body
       const updatedProduct = await Product.findOneAndUpdate({product_id:id},product,{new:true})
       res.status(200).json(updatedProduct);     
    }
    catch(error) {
        res.status(500).json("Enternal server error")
    }
}
module.exports = { setProducts,getProducts,deleteProducts,updateProducts};

 