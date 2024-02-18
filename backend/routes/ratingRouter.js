const express = require('express');
const router = express.Router();
const productController = require('../controllers/ratingController/updateProductRating');

/**
 * Express Router for handling product-related routes.
 * @module routes/productRoutes
 */

/**
 * Route to update the rating of a product.
 *
 * @name PUT /api/products/update-rating
 * @function
 * @memberof module:routes/productRoutes
 * @inner
 * @param {string} path - Express route path.
 * @param {callback} middleware - Express middleware callback.
 */
router.put('/update-rating', productController.updateProductRating);

/**
 * Exports the product router.
 * @type {Object}
 * @memberof module:routes/productRoutes
 */
module.exports = router;
