// controllers/wishlistController.js

const Cart = require('../../models/cartModel'); 
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
    const cartItems = await Cart.find({userId});

    res.status(200).json(cartItems);
  } catch (error) {
     res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * Adds a product to the wishlist for a specific user.
 * @param {Object} req - The request object containing userId and productId.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 */
// Add product to wishlist
exports.addToCart = async (req, res) => {
  const { userId, productId } = req.query;
 
  try {
    // Check if the product is already in the wishlist
    const existingCartItem = await Cart.findOne({ userId, productId });

    if (existingCartItem) {
      return res.status(400).json({ message: 'Product already exists in the wishlist' });
    }

    // If not, add it to the wishlist
    const cartlistItem = new Cart({ userId, productId });
    await cartlistItem.save();

    res.status(201).json({ message: 'Product added to cartlist successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * Removes a product from the wishlist of a specific user.
 * @param {Object} req - The request object containing userId and productId.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 */
// Remove product from wishlist
exports.removeItem = async (req, res) => {
  const { userId, productId } = req.query;
   try {
    // Find and remove the wishlist item
    await Cart.findOneAndDelete({ userId, productId });

    res.status(200).json({ message: 'Product removed from wishlist successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

