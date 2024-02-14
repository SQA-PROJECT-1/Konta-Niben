const Product = require('../../models/productModel')

/**
 * Deletes a product by its ID.
 * @async
 * @function deleteProducts
 * @param {Object} req - The request object sent by the client.
 * @param {string} req.params.productId - The ID of the product to be deleted.
 * @param {Object} res - The response object used to send data back to the client.
 * @returns {Promise<void>} A Promise that resolves when the product is successfully deleted and the response is sent, or rejects if an error occurs.
 * @throws {Error} If an error occurs during the deletion of the product.
 */
const deleteProducts = async (req, res) => {
    try {
        
        const id = req.params.productId;
        const product = await Product.findOneAndDelete({ productId: id });
        if (!product) {
            return res.status(404).json("Product not found");
        }
        res.status(200).json(product);
    } catch (error) {
        
        res.status(500).json("Internal server error");
        throw error;
    }
}

module.exports = { deleteProducts };
