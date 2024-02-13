const mongoose = require('mongoose');
const User = require("../../models/userModel");

/**
 * Add a product to the user's cart.
 * @param {Object} req - The Express request object representing the HTTP request..
 * @param {Object} res - The Express response object representing the HTTP response.
 * @returns {Promise<void>} - A Promise that resolves when the product is successfully added to the user's cart.
 * @throws {Error} If there is an error while adding the product to the cart.
 */
const addToCart = async (req, res) => {
    try {
        const { userId, productId, productName, productCategory, productPrice } = req.body;

        const user = await User.findOne({ userId });
        if (!user) {
            return res.status(404).send({ success: false, msg: "User not found" });
        }

        user.cart.push({ productId, productName, productCategory, productPrice });
        await user.save();

        res.status(200).send({ success: true, msg: "Product added to cart successfully" });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

module.exports = {
    addToCart
};
