import React, { useState } from 'react';
import Modal from 'react-modal';

const AddReviewModal = ({ isOpen, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  const handleRatingChange = (event) => {
    // Ensure rating is between 0 and 5
    const newRating = Math.min(5, Math.max(0, parseInt(event.target.value, 10)));
    setRating(newRating);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    // Perform any additional validation if needed
    onSubmit({ rating, message });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Add Review Modal">
      <h2>Add Review</h2>
      <label htmlFor="rating">Rating:  </label><br></br>
      <input
        type="number"
        id="rating"
        value={rating}
        onChange={handleRatingChange}
        min="0"
        max="5"
      /><br></br>
      <label htmlFor="message">Message:</label><br></br>
      <textarea id="message" value={message} onChange={handleMessageChange} />
      <br></br>
      <button
      className="bg-red-600 text-white px-3 py-1 rounded-md"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </Modal>
  );
};

export default AddReviewModal;
