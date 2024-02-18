/**
 * Imports the Product model from the productModel file.
 * @const {Object}
 */
const Product = require('../../models/productModel')
 /**
 * Controller function to update the rating of a product.
 *
 * @async
 * @function updateProductRating
 * @param {Object} req - The request object containing the productId and rating in the request body.
 * @param {Object} res - The response object used to send data back.
 * @returns {Promise<void>} A Promise that resolves when the product rating is successfully updated and sent, or rejects if an error occurs.
 */
exports.updateProductRating = async (req, res) => {
    // Extract productId and rating from the request body
    const { productId, rating } = req.body;

    try {
        // Find the product in the database using the productId
        const product = await Product.findOne({ productId });

        // If the product is not found, return a 404 response
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Update the rating of the product
        product.rating = rating;

        // Save the updated product to the database
        await product.save();

        // Send a success response with a message
        res.status(200).json({ message: 'Product rating updated successfully' });
    } catch (error) {
        // Log any errors to the console
        console.error(error);

        // Send a 500 response for internal server error
        res.status(500).json({ message: 'Internal server error' });

        // Throw the error to be caught and handled at a higher level if needed
        throw error;
    }
};
