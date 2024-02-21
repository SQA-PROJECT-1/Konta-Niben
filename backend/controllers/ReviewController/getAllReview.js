const ProductReview = require('../../models/reviewModel');
const Product = require('../../models/productModel'); // Assuming you have a Product model

/**
 * Controller function to get all reviews and average rating for a product.
 *
 * @async
 * @function getAllReviewsForProduct
 * @param {Object} req - The request object containing productId in the request params.
 * @param {Object} res - The response object used to send data back.
 * @returns {Promise<void>} A Promise that resolves when the reviews and average rating are successfully retrieved, or rejects if an error occurs.
 */
exports.getAllReviewsForProduct = async (req, res) => {
    const { productId } = req.body; // Use req.params to get the productId from the URL parameters
    try {
        // Find all reviews for the specified product
        const reviews = await ProductReview.find({ productId });

        // Calculate the average rating for the product
        const totalRatings = reviews.length;
        const sumRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
        const averageRating = totalRatings > 0 ? Math.floor(sumRatings / totalRatings) : 0;

        res.status(200).json({
            message: 'Reviews and average rating retrieved successfully',
            data: {
                reviews,
                averageRating,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
        throw error;
    }
};
