const WishList = require('../../models/wishListModel');

/**
 * Adds a product to the wishlist for a specific user.
 * @param {Object} req - The request object containing userId and productId.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 */
// Add product to wishlist
exports.addToWishlist = async (req, res) => {
    const { userId, productId } = req.query;

    try {
        // Check if either userId or productId is missing in the request query
        if (userId === undefined || productId === undefined) {
            return res.status(400).json({ message: 'userId and productId are required in the query' });
        }

        // Check if the product is already in the wishlist
        const existingWishlistItem = await WishList.findOne({ userId, productId });

        if (existingWishlistItem) {
            return res.status(400).json({ message: 'Product already exists in the wishlist' });
        }

        // If not, add it to the wishlist
        const wishlistItem = new WishList({ userId, productId });
        await wishlistItem.save();

        res.status(201).json({ message: 'Product added to wishlist successfully' });
    } catch (error) {
        // console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
