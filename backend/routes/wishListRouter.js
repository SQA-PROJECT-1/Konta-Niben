/**
 * Express router for managing wishlist operations.
 * @module routes/wishlist
 */

const { addToWishlist, removeFromWishlist, getAllWishlistItems } = require('../controllers/productController/wishList');

const router = require('express').Router();

/**
 * Route to add a product to the wishlist.
 * @name POST/wishlist
 * @function
 * @memberof module:routes/wishlist
 * @param {Object} req - The request object containing userId and productId.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 */
router.post("/", addToWishlist);

/**
 * Route to remove a product from the wishlist.
 * @name DELETE/wishlist
 * @function
 * @memberof module:routes/wishlist
 * @param {Object} req - The request object containing userId and productId.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 */
router.delete("/", removeFromWishlist);

/**
 * Route to get all wishlist items for a user.
 * @name GET/wishlist
 * @function
 * @memberof module:routes/wishlist
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 */
router.get("/", getAllWishlistItems);

module.exports = router;
