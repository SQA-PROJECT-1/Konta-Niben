const Product = require('../../models/productModel')

/**
 * Updates a product by its ID.
 * @async
 * @function updateProducts
 * @param {Object} req - The request object sent by the client.
 * @param {number} req.params.productId - The ID of the product to be updated.
 * @param {Object} req.body - The request body containing the updated product details.
 * @param {Object} res - The response object used to send data back to the client.
 * @returns {Promise<void>} A Promise that resolves when the product is successfully updated and the response is sent, or rejects if an error occurs.
 * @throws {Error} If an error occurs during the update of the product.
 */
const updateProducts = async (req, res) => {
    try {
        const id = parseInt(req.params.productId);
        const product = req.body;
        const updatedProduct = await Product.findOneAndUpdate({ productId: id }, product, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
       
        res.status(500).json("Internal server error");
        throw error;
    }
}

module.exports = { updateProducts };
