const Product = require('../../models/productModel');

const getProductRecommendation = async (req, res) => {
    try {
        const { productCategory, productTargetedAge, productTargetedConcerns, productTargetedSkinType } = req.body;

    
        if (!productCategory || !productTargetedConcerns || !productTargetedSkinType) {
            return res.status(400).json({ error: 'Please provide product category, targeted concerns, and targeted skin type.' });
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

        res.status(200).json(recommendedProducts);
    } catch (error) {
        console.error('Error recommending products:', error);
        res.status(500).json({ error: 'An error occurred.' });
    }
};

module.exports = { getProductRecommendation };
