import React, { useState } from 'react';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send payment details to a server
    console.log('Form submitted:', { cardNumber, expiryDate, cvv });
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Enter card number"
          required
        />
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/YY"
          required
        />
        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          maxLength="3"
          placeholder="Enter CVV"
          required
        />
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default PaymentForm;
