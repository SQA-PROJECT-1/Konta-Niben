/**
 * Express router for managing wishlist operations.
 * @module routes/addToCart
 */

const { addToCart, removeItem, getAllCartList } = require('../controllers/productController/addToCart');
const router = require('express').Router();

/**
 * Route to add a product to the wishlist.
 * @name POST/AddToCart
 * @function
 * @memberof module:routes/cartlist
 * @param {Object} req - The request object containing userId and productId.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 */
router.post("/", addToCart);

/**
 * Route to remove a product from the wishlist.
 * @name DELETE/cartlist
 * @function
 * @memberof module:routes/cartlist
 * @param {Object} req - The request object containing userId and productId.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 */
router.delete("/:productId", removeItem);

/**
 * Route to get all wishlist items for a user.
 * @name GET/wishlist
 * @function
 * @memberof module:routes/wishlist
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise representing the completion of the operation.
 */
router.get("/", getAllCartList);


module.exports = router;