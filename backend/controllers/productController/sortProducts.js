const Product = require('../../models/productModel')

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

module.exports = {sortProducts};