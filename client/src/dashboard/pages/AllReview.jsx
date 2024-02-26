// AllReviews.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const cardStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};
 
const AllReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/review/review?productId=${id}`)
      .then((response) => {
        const data = response.data;
        console.log('All reviews:', data.data.reviews);
        setReviews(data.data.reviews); // Assuming data is an object with a 'data' property that contains an array of reviews
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });
  }, [id]);

  return (
    <div>
    <h1  className="text-center mt-4 font-bold">All Reviews for Product ID {id}</h1>
    {Array.isArray(reviews) && reviews.map((review) => (
        <div key={review.id} style={cardStyle}>
          {/* Display individual review information */}
          <p>
            User ID: {review.userId}<br />
            Review: {review.message} <br />
            Rating: {review.rating}<br /><br />
          </p>
        </div>
      ))}
    </div>
  );
};

export default AllReviews;
