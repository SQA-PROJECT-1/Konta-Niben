const ProductReview = require('../../models/reviewModel');
/**
 * Controller function to add a new review.
 *
 * @async
 * @function addReview
 * @param {Object} req - The request object containing productId, userId, and message in the request body.
 * @param {Object} res - The response object used to send data back.
 * @returns {Promise<void>} A Promise that resolves when the review is successfully added, or rejects if an error occurs.
 */
exports.addReview = async (req, res) => {
    const { productId, userId, message } = req.body;

    try {
        // Check if a review already exists for the product and user combination
        const existingReview = await ProductReview.findOne({ productId, userId });

        if (existingReview) {
            // If a review already exists, return an error
            return res.status(400).json({ message: 'Review already exists for this product and user' });
        }

        // Create a new review
        const newReview = new ProductReview({ productId, userId, message });
        await newReview.save();

        res.status(201).json({ message: 'Review added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
        throw error;
    }
};
