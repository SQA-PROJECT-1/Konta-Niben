const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/rating&ReviewController');
const productController = require('../controllers/rating&ReviewController/updateProductRating');

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


/**
 * Express Router for handling product review-related routes.
 * @module routes/reviewRoutes
 */

/**
 * Route to add a new review.
 *
 * @name POST /api/reviews/add
 * @function
 * @memberof module:routes/reviewRoutes
 * @inner
 * @param {string} path - Express route path.
 * @param {callback} middleware - Express middleware callback.
 */
router.post('/add', reviewController.addReview);

/**
 * Route to delete a review.
 *
 * @name DELETE /api/reviews/delete
 * @function
 * @memberof module:routes/reviewRoutes
 * @inner
 * @param {string} path - Express route path.
 * @param {callback} middleware - Express middleware callback.
 */
router.delete('/delete', reviewController.deleteReview);

/**
 * Exports the review router.
 * @type {Object}
 * @memberof module:routes/reviewRoutes
 */
module.exports = router;
module.exports = router;
