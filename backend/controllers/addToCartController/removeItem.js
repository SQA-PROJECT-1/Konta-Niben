const CartList = require('../../models/cartModel'); 
/**
 * Removes a product from the cart of a specific user.
 * @param {Object} req - The request object containing userId and productId.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 */
// Remove product from cart
exports.removeItem = async (req, res) => {
    const { userId, productId } = req.query;
     try {
      // Find and remove the cart item
      await CartList.findOneAndDelete({ userId, productId });
  
      res.status(200).json({ message: 'Product removed from cart successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };