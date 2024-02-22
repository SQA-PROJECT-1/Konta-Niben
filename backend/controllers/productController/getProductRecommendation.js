const Product = require('../../models/productModel');

/**
 * Retrieves product recommendations based on specified criteria.
 * This function fetches products from the database that match the provided criteria such as product category,
 * targeted age group, targeted concerns, and targeted skin type.
 * 
 * @param {Object} req - The request object containing product category, targeted age, skin type and concerns.
 * @param {Object} req.body - The request body.
 * @param {string} req.body.productCategory - The category of the product.
 * @param {number} req.body.productTargetedAge - The targeted age group for the product.(optional)
 * @param {string} req.body.productTargetedSkinType - The targeted skin type for the product.
 * @param {string} req.body.productTargetedConcerns - The concerns the product targets.
 * @param {Object} res - The response object to send back to the client.
 * @returns {Object} The recommended products based on the specified criteria.
 * @throws {Error} If an error occurs while fetching recommendations.
 */

const getProductRecommendation = async (req, res) => {
    try {
        const { productCategory, productTargetedAge, productTargetedConcerns, productTargetedSkinType } = req.body;

    
        if (!productCategory || !productTargetedConcerns || !productTargetedSkinType) {
            return res.status(400).json({ error: 'Please provide product category, targeted concerns, and targeted skin type.' });
        }

        if (productTargetedAge && productTargetedAge < 0) {
            return res.status(400).json({ error: 'Age cannot be negative.' });
        }

        const conditions = {
            productCategory,
            productTargetedConcerns, 
            productTargetedSkinType 
        };

        if (productTargetedAge) {
            conditions.productTargetedAge = { $gte: productTargetedAge }; 
        }

        const recommendedProducts = await Product.find(conditions);

        if (recommendedProducts.length === 0) {
            return res.status(404).json({ error: 'No recommended products found for the specified category.' });
        }
     
        return res.status(200).json(recommendedProducts);

    } catch (error) {
        //console.error('Error recommending products:', error);
        return res.status(500).json({ error: 'An error occurred.' });
    }
};

module.exports = { getProductRecommendation };
