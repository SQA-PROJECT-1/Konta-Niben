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
        res.status(500).json("Internal server error")
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
        res.status(500).json("Internal server error")
    }
}

//In postman use this: localhost:5000/api/products/sortProducts?sortBy=productPrice
const sortProducts = async (req, res) => {
    try {
        const { sortBy } = req.query;

        let sortOption = {};

        if (sortBy === 'productName' || sortBy === 'productPrice') {
            sortOption[sortBy] = 1;
        } else {
            return res.status(400).json({ error: "Invalid sort option" });
        }

        const sortedProducts = await Product.find().sort(sortOption);

        res.status(200).json(sortedProducts);
    } catch (error) {
        res.status(500).json("Server error");
    }
};

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

module.exports = { 
    setProducts,
    getProducts,
    deleteProducts,
    updateProducts,
    searchProducts,
    sortProducts
};