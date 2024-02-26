import React from 'react';
import { useLocation } from 'react-router-dom';

const WishlistPage = () => {
  const location = useLocation();
  const wishListData = location.state?.wishListData || [];

  return (
    <div>
      <h2>Your Wishlist</h2>
      <ul>
        {wishListData.map((wishlistItem, index) => (
          <li key={index}>Product ID: {wishlistItem.productId}</li>
        ))}
      </ul>
    </div>
  );
};

export default WishlistPage;
