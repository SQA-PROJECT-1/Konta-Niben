 

const WishList = require('../../models/wishListModel'); 
/**
 * Retrieves all wishlist items for a given user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 */
// Get all wishlist items for a user
exports.getAllWishlistItems = async (req, res) => {
  const { userId } = req.query; // Assuming userId is passed as a parameter in the URL

  try {
    // Find all wishlist items for the given userId
    const wishlistItems = await WishList.find({userId});

    res.status(200).json(wishlistItems);
  } catch (error) {
     res.status(500).json({ message: 'Internal server error' });
  }
};