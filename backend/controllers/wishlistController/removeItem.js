const WishList = require('../../models/wishListModel'); 
/**
 * Removes a product from the wishlist of a specific user.
 * @param {Object} req - The request object containing userId and productId.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 */
// Remove product from wishlist
exports.removeFromWishlist = async (req, res) => {
    const { userId, productId } = req.query;
     try {
      // Find and remove the wishlist item
      await WishList.findOneAndDelete({ userId, productId });
  
      res.status(200).json({ message: 'Product removed from wishlist successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };