const Product = require('../../models/productModel')

const adminDashboard = async (req, res) => {
    try {
       
        const countOverallProducts = await Product.find().countDocuments();

        const productsByCategory = await Product.aggregate([
            { $group: { _id: "$productCategory", count: { $sum: 1 } } }
        ]);

        const productsBySubcategory = await Product.aggregate([
            { $group: { _id: "$productSubcategory", count: { $sum: 1 }, products: { $push: "$$ROOT" } } }
        ]);

       
        const formattedCategories = productsByCategory.map(category => ({
            name: category._id,
            count: category.count,
            products: productsBySubcategory.filter(subcategory => subcategory.products[0].productCategory === category._id)
        }));

        return res.status(200).json({
            countOverallProducts,
            formattedCategories,
        });
    } catch (error) {
        console.error("Error in adminDashboard:", error);
        res.status(500).json("Internal server error");
    }
}

module.exports = { adminDashboard };


