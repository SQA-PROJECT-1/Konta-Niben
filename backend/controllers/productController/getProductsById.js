/**
 * Retrieves a product by its unique identifier.
 * @param {import('express').Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 * @returns {Promise<void>} A Promise representing the asynchronous operation.
 */
//  const Product = require('../../models/productModel');

/**
 * Retrieves a product by its unique identifier.
 * @param {import('express').Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 * @returns {Promise<void>} A Promise representing the asynchronous operation.
 */
// const getProductsById = async (req, res) => {
//     try {
//         const id = req.params.productId; // Product ID extracted from the request parameters
//         const product = await Product.findOne({ productId: id }); // Finding a product by its ID
//         res.status(200).json(product); // Sending the product data as a JSON response
//     } catch (error) {
//         res.status(500).json(error); // Handling any errors and sending a 500 status code with the error message
//     }
// };

// module.exports = { getProductsById };
const Product = require('../../models/productModel');

const getProductsById = async (req, res) => {
    try {
        const id = req.params.productId;

        // Handle empty product ID
        if (!id) {
            return res.status(400).json({ error: 'Product ID is required' });
        }

        // Find the product by ID
        const product = await Product.findOne({ productId: id });

        // Handle non-existent product ID
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Handle product ID with special characters
        if (/[^a-zA-Z0-9]/.test(id)) {
            return res.status(400).json({ error: 'Invalid product ID' });
        }

        // Return the product data
        res.status(200).json(product);
    } catch (error) {
        // Handle unexpected errors
        console.error('Unexpected error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { getProductsById };