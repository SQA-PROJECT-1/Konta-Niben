/**
 * Module for handling product-related routes.
 * @module productRouter
 */

const { updateProducts } = require('../controllers/productController/updateProducts');
const { getProducts } = require('../controllers/productController/getProducts');
const { deleteProducts } = require('../controllers/productController/deleteProducts');
const { setProducts } = require('../controllers/productController/setProducts');
const {getProductsById} = require('../controllers/productController/getProductsById');
const { addToCart } = require('../controllers/productController/addToCart');

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
router.get("/", getProducts);

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
router.delete("/:productId", deleteProducts);

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
router.put("/:productId", updateProducts);
/**
 * Route for showing a product by ID..
 * @name PUT/products/:productId
 * @function
 * @memberof module:productRouter
 * @inner
 * @param {string} path - Express route path.
 * @param {Function} middleware - Middleware function to handle the request.
 * @returns {Object} Express router object.
 */
router.get("/:productId",getProductsById);
/**
 * Route for create a product by ID.
 * @name PUT/products/:productId
 * @function
 * @memberof module:productRouter
 * @inner
 * @param {string} path - Express route path.
 * @param {Function} middleware - Middleware function to handle the request.
 * @returns {Object} Express router object.
 */
router.post("/addToCart",addToCart)

module.exports = router;
