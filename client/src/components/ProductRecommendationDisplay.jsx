import React from "react";
import ProductCard from "./ProductCard";


const ProductRecommendationDisplay = ({ recommendedProducts }) => (
  <div>
    <h2 className="text-2xl text-center font-bold m-14 p-5">Recommended Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
      {recommendedProducts.length === 0 ? (
        <p className="text-center pb-10 text-lg">Sorry! No Recommended products found.</p>
      ) : (
        recommendedProducts.map(product => (
          
          <ProductCard key={product.productId} product={product} />
        ))
      )}
    </div>
  </div>
);

export default ProductRecommendationDisplay;
