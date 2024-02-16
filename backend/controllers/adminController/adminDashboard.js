const Product = require('../../models/productModel');
const User = require('../../models/userModel');

/**
 * Performs an aggregation operation on the Product collection using the provided pipeline.
 * @param {Array} pipeline - The pipeline describing the aggregation stages.
 * @returns {Promise<Array>} A promise resolving to an array representing the result of the aggregation operation.
 */ 
const aggregateData = async (pipeline) => {
    return await Product.aggregate(pipeline);
};

/**

* Formats aggregated data by associating each item with its name, count,
* and filtered products based on a provided filter function.
* @param {Array} data - The aggregated data to be formatted.
* @param {Function} filterFn - A function used to filter products.
* @param {Array} productsBySubcategory - The aggregated data of products grouped by subcategory.
* @returns {Array} The formatted data with name, count, and filtered products.
*/
const formatData = (data, filterFn, productsBySubcategory) => data.map(item => ({
    name: item._id,
    count: item.count,
    products: filterFn ? filterFn(productsBySubcategory, item._id) : []
}));

/**
 * Filters the subcategories based on the specified category ID.
 * @param {Array} subcategories - The subcategories to be filtered.
 * @param {string} categoryId - The ID of the category.
 * @returns {Array} The filtered subcategories.
 */
const filterSubcategories = (subcategories, categoryId) => {
    return subcategories.filter(subcategory => subcategory.products[0].productCategory === categoryId);
};

/**
 * Retrieves statistics and information of products and users for the admin dashboard.
 * Aggregates data from the Product and User models to generate insights and metrics
 * for display on the admin dashboard.
 * @async
 * @function adminDashboard
 * @param {Object} req - The request object sent by the client.
 * @param {Object} res - The response object used to send data back to the client.
 * @returns {Promise<void>} A Promise that resolves when the dashboard data is successfully retrieved and sent, or rejects if an error occurs.
 */
const adminDashboard = async (req, res) => {
    try {
       
        const countOverallProducts = await Product.countDocuments();
        const countTotalUsers = await User.countDocuments();
        const productsByCategory = await aggregateData([{ $group: { _id: "$productCategory", count: { $sum: 1 } } }]);
        const productsBySubcategory = await aggregateData([{ $group: { _id: "$productSubcategory", count: { $sum: 1 }, products: { $push: "$$ROOT" } } }]);
        const productsByBrand = await aggregateData([{ $group: { _id: "$productBrandName", count: { $sum: 1 }, products: { $push: "$$ROOT" } } }]);
        const formattedCategories = formatData(productsByCategory, filterSubcategories, productsBySubcategory);
        const formattedBrands = formatData(productsByBrand, null, null);

       
        return res.status(200).json({
            countOverallProducts,
            formattedCategories,
            formattedBrands,
            countTotalUsers
        });
    } catch (error) {
        
        return res.status(500).json({ error: "Internal server error. Please try again later." });
    }
};

module.exports = { adminDashboard };
