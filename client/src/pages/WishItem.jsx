// WishItem.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WishItem = ({ productId, onRemove }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${productId}`)
      .then((response) => {
        const data = response.data;
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [productId]);

  const handleRemove = () => {
    // Call the callback to remove the item and trigger re-render
    onRemove(productId);
  };

  return (
    <div className="wishlist-card p-4 border border-gray-300 rounded-md relative">
      <p>
        <span className="font-bold"> Product Name: </span> {product.productName}
      </p>
      <p>
        <span className="font-bold"> Product Price: </span> {product.productPrice}
      </p>
      <p>
        <span className="font-bold"> Product Category: </span> {product.productCategory}
      </p>
      <button className="bg-red-600 text-white px-3 py-1 rounded-md mt-2" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

export default WishItem;
