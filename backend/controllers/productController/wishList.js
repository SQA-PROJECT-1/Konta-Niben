// controllers/wishlistController.js

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
    console.error(error);
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
exports.addToWishlist = async (req, res) => {
  const { userId, productId } = req.query;
  console.log('sakib mollah'+userId)

  try {
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
exports.removeFromWishlist = async (req, res) => {
  const { userId, productId } = req.query;
  console.log(req.query);
  try {
    // Find and remove the wishlist item
    await WishList.findOneAndDelete({ userId, productId });

    res.status(200).json({ message: 'Product removed from wishlist successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * Checks if a product already exists in the wishlist for a specific user.
 * @param {string} userId - The user ID.
 * @param {string} productId - The product ID.
 * @returns {Promise<boolean>} - A Promise representing whether the product exists in the wishlist or not.
 */
exports.isProductInWishlist = async (req,res) => {
   
  const { userId, productId } = req.query;

  try {
    const existingWishlistItem = await WishList.findOne({ userId, productId });
    console.log(existingWishlistItem)
    if(!existingWishlistItem){
      
      return res.status(200).json({statusCode:1,message:"ok"});
    }
    return res.status(200).json({statusCode:2,message:"not ok"});
  } catch (error) {
    console.error(error);
    throw new Error('Error checking wishlist for product');
  }
};

