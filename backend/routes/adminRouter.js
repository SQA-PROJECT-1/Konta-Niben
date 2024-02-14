/**
 * Module for handling admin-related routes.
 * @module adminRouter
 */

const { adminDashboard } = require('../controllers/adminController/adminDashboard');
const router = require('express').Router();

/**
 * Route for accessing the admin dashboard.
 * @name GET/admin
 * @function
 * @memberof module:adminRouter
 * @inner
 * @param {string} path - Express route path.
 * @param {Function} middleware - Middleware function to handle the request.
 * @returns {Object} Express router object.
 */
router.get("/", adminDashboard);

module.exports = router;
