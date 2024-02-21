const ProductReview = require('../../models/reviewModel');
const Product = require('../../models/productModel'); // Assuming you have a Product model

/**
 * Controller function to add or update a review for a product.
 *
 * @async
 * @function addOrUpdateReview
 * @param {Object} req - The request object containing productId, userId, message, and rating in the request body.
 * @param {Object} res - The response object used to send data back.
 * @returns {Promise<void>} A Promise that resolves when the review is successfully added or updated, or rejects if an error occurs.
 */
exports.addOrUpdateReview = async (req, res) => {
    const { productId, userId, message, rating } = req.body;
     try {
        // Upsert the review
        const result = await ProductReview.findOneAndUpdate(
            { productId, userId },
            { $set: { productId, userId, message, rating } },
            { new: true, upsert: true }
        );

        // Calculate the average rating for the product
        const reviews = await ProductReview.find({ productId });
        const totalRatings = reviews.length;
        const sumRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
        const averageRating = totalRatings > 0 ? Math.floor(sumRatings / totalRatings) : 0;

        // Update the average rating for the product
        const updatedProduct = await Product.findOneAndUpdate(
            { productId },
            { $set: { averageRating } },
            { new: true }
        );
         res.status(200).json({
            message: 'Review added or updated successfully',
            data: {
                review: result,
                averageRating: averageRating,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
        throw error;
    }
};
 