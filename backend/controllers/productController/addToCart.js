

// controllers/wishlistController.js

const Cart = require('../../models/cartModel'); 
/**
 * Retrieves all wishlist items for a given user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 */


// Get all cart items for a user
exports.getAllCartList = async (req, res) => {
  //const { userId } = req.query;

  try {

    // Find all cart items for the given userId

    // const cartItems = await Cart.find({}).populate('userId');
    const cartItems = await Cart.find({});

    res.status(200).json(cartItems);
  } catch (error) {
     res.status(500).json({ message: 'Internal server error',mgs:error.message });
  }
};

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

    // Check if the product is already in the cart

    const existingCartItem = await Cart.findOne({ userId, productId });

    if (existingCartItem) {
      return res.status(400).json({ message: 'Product already exists in the cartlist' });
    }


    // If not, add it to the cart

    const cartlistItem = new Cart({ userId, productId });
    await cartlistItem.save();

    res.status(201).json({ message: 'Product added to cartlist successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/**

 * Removes a product from the cart of a specific user.

 * @param {Object} req - The request object containing userId and productId.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 */

// Remove product from cart

exports.removeItem = async (req, res) => {
  // const { productId } = req.query;
  const productId = (req.params.productId);
  console.log("php: ");
  console.log(productId);
  try {
    const product = await Cart.findOneAndDelete({ productId: productId });
    console.log(product);
    if (product) {
      res.status(200).json(product); // Product removed from Cart successfully
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

