/**
 * Module for handling product-related routes.
 * @module productRouter
 */

const { updateProducts } = require('../controllers/productController/updateProducts');
const { getProducts } = require('../controllers/productController/getProducts');
const { deleteProducts } = require('../controllers/productController/deleteProducts');
const { setProducts } = require('../controllers/productController/setProducts');
const { searchAndSortProducts } = require('../controllers/productController/searchAndSortProducts');
const {getProductsById} = require('../controllers/productController/getProductsById');

const authorization = require('../middleware/auth')

const router = require('express').Router();

/**
 * Route for adding a new product.
 * @name POST/products
 * @function
 * @memberof module:productRouter
 * @inner
 * @param {string} path - Express route path.
 * @param {Function} middleware - Middleware function to handle the request.
 * @returns {Object} Express router object.
 */
router.post("/", setProducts);

/**
 * Route for retrieving all products.
 * @name GET/products
 * @function
 * @memberof module:productRouter
 * @inner
 * @param {string} path - Express route path.
 * @param {Function} middleware - Middleware function to handle the request.
 * @returns {Object} Express router object.
 */
router.get("/",getProducts);

/**
 * Route for deleting a product by ID.
 * @name DELETE/products/:productId
 * @function
 * @memberof module:productRouter
 * @inner
 * @param {string} path - Express route path.
 * @param {Function} middleware - Middleware function to handle the request.
 * @returns {Object} Express router object.
 */
router.delete("/:productId",deleteProducts);

/**
 * Route for updating a product by ID.
 * @name PUT/products/:productId
 * @function
 * @memberof module:productRouter
 * @inner
 * @param {string} path - Express route path.
 * @param {Function} middleware - Middleware function to handle the request.
 * @returns {Object} Express router object.
 */
router.put("/:productId",updateProducts);

/**
 * Middleware function to handle searching and sorting products.
 * @name searchAndSortProducts
 * @function
 * @memberof module:productRouter
 * @inner
 * @param {object} req - Express request object containing search and sort parameters.
 * @param {object} req.body - Request body containing search parameters like productName, productCategory, productBrandName, etc.
 * @param {object} req.query - Query parameters containing sorting options like sortBy.
 * @param {object} res - Express response object to send the search results.
 * @returns {Promise<void>} - Promise representing the completion of the function.
 */

router.post("/searchAndSortProducts", searchAndSortProducts)

router.get("/:productId",getProductsById)


module.exports = router;
