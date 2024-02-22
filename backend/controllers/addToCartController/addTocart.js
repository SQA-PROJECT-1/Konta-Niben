const Cart = require('../../models/cartModel');

/**
 * Adds a product to the cart for a specific user.
 * @param {Object} req - The request object containing userId and productId.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 */
// Add product to cart
exports.addToCart = async (req, res) => {
    const { userId, productId } = req.query;

    try {
        // Check if either userId or productId is missing in the request query
        if (userId === undefined || productId === undefined) {
            return res.status(400).json({ message: 'userId and productId are required in the query' });
        }

        // Check if the product is already in the cart
        const existingCartlistItem = await Cart.findOne({ userId, productId });

        if (existingCartlistItem) {
            return res.status(400).json({ message: 'Product already exists in the Cart' });
        }

        // If not, add it to the cart
        const cartlistItem = new Cart({ userId, productId });
        await cartlistItem.save();

        res.status(201).json({ message: 'Product added to cart successfully' });
    } catch (error) {
        // console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};