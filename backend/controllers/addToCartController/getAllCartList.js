 

const CartList = require('../../models/cartModel'); 
/**
 * Retrieves all wishlist items for a given user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 */
// Get all wishlist items for a user
exports.getAllCartList = async (req, res) => {
  const { userId } = req.query; // Assuming userId is passed as a parameter in the URL

  try {
    // Find all wishlist items for the given userId
    const cartListItems = await CartList.find({userId});

    res.status(200).json(cartListItems);
  } catch (error) {
     res.status(500).json({ message: 'Internal server error' });
  }
};