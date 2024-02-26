// WishlistPage.js
import React, { useState, useEffect } from 'react';
import WishItem from './WishItem';
import axios from 'axios';

const WishlistPage = () => {
  const [wishListData, setWishListData] = useState([]);
  const storedData = localStorage.getItem('set-data-for-user');
  console.log('Stored Data:', storedData);
  const data = JSON.parse(storedData);

  useEffect(() => {
    // Fetch the wishlist data initially
    axios.get(`http://localhost:5000/api/wishList/?userId=${data?._id}`)
      .then((response) => {
        setWishListData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching wishlist data:', error);
      });
  }, [data?._id]);

  const handleRemove = (productId) => {
    // Perform the removal API call here
    axios.delete(`http://localhost:5000/api/wishList/?userId=${data?._id}&productId=${productId}`)
      .then((response) => {
        console.log('Item removed successfully:', response.data);

        // Update local state to trigger re-render
        setWishListData(wishListData.filter(item => item.productId !== productId));
      })
      .catch((error) => {
        console.error('Error removing item from wishlist:', error);
        // Handle error appropriately (e.g., show an error message to the user)
      });
  };

  return (
    <div className="wishlist-container">
      <h2 className="text-center mt-4 font-bold">Your Wishlist</h2>
      {wishListData.map((wishlistItem, index) => (
        <WishItem key={index} productId={wishlistItem.productId} onRemove={handleRemove} />
      ))}
    </div>
  );
};

export default WishlistPage;
