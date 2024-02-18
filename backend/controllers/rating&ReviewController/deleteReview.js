const ProductReview = require('../../models/reviewModel');

/**
 * Controller function to delete a review.
 *
 * @async
 * @function deleteReview
 * @param {Object} req - The request object containing productId and userId in the request body.
 * @param {Object} res - The response object used to send data back.
 * @returns {Promise<void>} A Promise that resolves when the review is successfully deleted, or rejects if an error occurs.
 */
exports.deleteReview = async (req, res) => {
    const { productId, userId } = req.body;

    try {
        // Find and delete the review
        const deletedReview = await ProductReview.findOneAndDelete({ productId, userId });

        if (!deletedReview) {
            // If no review is found, return an error
            return res.status(404).json({ message: 'Review not found' });
        }

        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
        throw error;
    }
};
