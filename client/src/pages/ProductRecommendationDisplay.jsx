import React from 'react';

const ProductRecommendationDisplay = ({ recommendedProducts, error }) => {
    return (
        <div>
            {error && <p>{error}</p>}

            {recommendedProducts.length > 0 && (
                <div>
                    <h2>Recommended Products</h2>
                    <ul>
                        {recommendedProducts.map((product) => (
                            <li key={product._id}>{product.productName}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProductRecommendationDisplay;
