import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/api/addTocart')
      .then(response => response.json())
      .then(data => {
        setCartItems(data);
        let total = 0;
        data.forEach(item => {
          const product = products.find(product => product.productId === item.productId);
          if (product) {
            total += product.productPrice;
          }
        });
        
        setTotalPrice(total);
      })
      .catch(error => console.error('Error fetching cart items:', error));
  }, [products]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const removeFromCart = (productId) => {
    axios.delete(`http://localhost:5000/api/addToCart/${productId}`)
      .then(res => console.log(res.data))
      .catch(error => console.error(error)); // Handle error from Axios request
      window.location.reload();
  };

  const makePayment = (totalPrice) => {
    const storedData = localStorage.getItem('set-data-for-user');
    const data=JSON.parse(storedData)
    axios 
      .post(
        `http://localhost:5000/api/payment/initiated?userId=${data?._id}&amount=${totalPrice}`
      )
      .then((response) => {
        console.log(response.data);
        // @ts-ignore
        window.location.replace(response.data)
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  }

  return (
    <div className="container mx-auto px-4">
  <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
  {cartItems.length === 0 ? (
    <p className="text-gray-500">Your cart is empty</p>
  ) : (
    <>
      <ul>
        {cartItems.map(item => (
          <li key={item._id} className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold mb-2">{products.find(product => product.productId === item.productId)?.productName}</h3>
                <h3 className="text-gray-600">Price: ${products.find(product => product.productId === item.productId)?.productPrice}</h3>
              </div>
              <button onClick={() => removeFromCart(item?.productId)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-lg font-semibold mt-4">Total Price: ${totalPrice}</p>
      <button onClick={()=> makePayment(totalPrice)} className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-4">Order and Payment</button>
    </>
  )}
</div>

  );
};


export default CartPage;

