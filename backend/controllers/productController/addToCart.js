const mongoose = require('mongoose');
const User = require("../../models/userModel");

const addToCart = async(req, res) => {
    try {
        const { userId, productId, productName, productCategory, productPrice } = req.body;

        const user = await User.findOne({ userId });
        if (!user) {
            return res.status(404).send({ success: false, msg: "User not found" });
        }

        user.cart.push({ productId, productName, productCategory, productPrice });
        await user.save();

        res.status(200).send({ success: true, msg: "Product added to cart successfully" });
    } catch(error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

module.exports = {
    addToCart
};