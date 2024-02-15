const User = require("../../models/userModel");
const Cart = require("../../models/cartModel");
/**
 * Add a product to the user's cart.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {string} req.body.userId - The ID of the user.
 * @param {string} req.body.productId - The ID of the product to add to the cart.
 * @returns {Promise<void>} A promise that resolves when the product is added to the cart.
 */
const addToCart = async (req, res) => {
    try {
        const { userId, productId } = req.body;
        
        // Check if both userId and productId are provided
        if (!userId || !productId) {
            return res.status(400).send({ success: false, msg: "Both userId and productId are required" });
        }
        console.log("monira hello...")
        // Check if the user exists
        const user = await User.findOne({userId:userId});
        console.log(user)
        console.log("monira hello")
        if (!user) {
            return res.status(404).send({ success: false, msg: "User not found" });
        }

        // Create a new cart item
        const cartItem = new Cart({ userId, productId });
        
        // Save the cart item
        await cartItem.save();

        res.status(200).send({ success: true, msg: "Product added to cart successfully" });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

module.exports = {
    addToCart
};
