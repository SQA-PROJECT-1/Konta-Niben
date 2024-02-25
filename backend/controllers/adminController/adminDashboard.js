/**
 * Imports the Product model from the productModel file.
 * @const {Object}
 */
const Product = require('../../models/productModel')

/**
 * Retrieves statistics and information of products and users for the admin dashboard.
 * @async
 * @function adminDashboard
 * @param {Object} req - The request object sent.
 * @param {Object} res - The response object used to send data back.
 * @returns {Promise<void>} A Promise that resolves when the dashboard data is successfully retrieved and sent, or rejects if an error occurs.
 * @throws {Error} If an error occurs during the retrieval or processing of dashboard data.
 */
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
            /**
             * The name of the product category.
             * @type {string}
             */
            name: category._id,

            /**
             * The number of products within this category.
             * @type {number}
             */
            count: category.count,

            /**
             * Array of products grouped under this category.
             * @type {Object[]}
             */
            products: productsBySubcategory.filter(subcategory => subcategory.products[0].productCategory === category._id)
        }));

        const countTotalUsers = await User.find().countDocuments();

        
        return res.status(200).json({
            /**
             * The total count of products across all categories.
             * @type {number}
             */
            countOverallProducts,

            /**
             * Categories with their respective counts and subcategories.
             * @type {Object[]}
             */
            formattedCategories,
            /**
             * The total count of users in the database.
             * @type {number}
             */
            countTotalUsers
        });
    } catch (error) {
        /**
         * Handles errors that occur during the dashboard data retrieval or processing.
         * @type {Error}
         */
        console.error("Error in adminDashboard:", error);
        res.status(500).json("Internal server error");
        throw error;
    }
}

module.exports = { adminDashboard };


