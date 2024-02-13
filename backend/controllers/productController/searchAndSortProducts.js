const Product = require('../../models/productModel');

const searchAndSortProducts = async (req, res) => {
    try {
        const { productName, productCategory, sortBy } = req.body;

        // Search products based on productName and productCategory
        const searchPipeline = [];
        const matchCondition = {};

        if (productCategory && productCategory.length > 0) {
            matchCondition.productCategory = productCategory;
        }

        if (productName && productName.length > 0) {
            const cleanedProductName = productName.replace(/\s+/g, ' ').trim();
            matchCondition.productName = { $regex: new RegExp(cleanedProductName, 'i') };
        }

        searchPipeline.push({
            $match: matchCondition
        });

        const searchResult = await Product.aggregate(searchPipeline);

        // Sort the search result based on sortBy parameter
        let sortOption = {};

        if (sortBy === 'productName' || sortBy === 'productPrice') {
            sortOption[sortBy] = 1;
        } else {
            return res.status(400).json({ error: "Invalid sort option" });
        }

        const sortedResult = searchResult.sort(sortOption);

        res.status(200).json(sortedResult);
    } catch (error) {
        console.error(error);
        res.status(500).json("Server error");
    }
};

module.exports = { searchAndSortProducts };
