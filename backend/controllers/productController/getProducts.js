const Product = require('../../models/productModel')

/**
 * Retrieves all products.
 * @async
 * @function getProducts
 * @param {Object} req - The request object sent by the client.
 * @param {Object} res - The response object used to send data back to the client.
 * @returns {Promise<void>} A Promise that resolves when the products are successfully retrieved and sent, or rejects if an error occurs.
 * @throws {Error} If an error occurs during the retrieval of products.
 */
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json("Server error");
        throw error;
    }
}

module.exports = { getProducts };

