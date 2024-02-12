import React, { useState, useEffect } from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.product_id} className="flex items-center justify-between mb-4">
            <span>{product.product_name} - ${product.product_price}</span>
            <button onClick={() => addToCart(product)} className="px-3 py-1 bg-blue-500 text-white rounded">Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const addToCart = product => {
    setCart([...cart, { product }]);
  };

  const removeFromCart = item => {
    setCart(cart.filter(cartItem => cartItem !== item));
  };

  const totalCost = cart.reduce((total, item) => total + item.product.product_price, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">This is shopping cart</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <ProductList products={products} addToCart={addToCart} />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Shopping Cart</h2>
          <ul>
            {cart.map(item => (
              <li key={item.product.product_id} className="flex items-center justify-between mb-4">
                <span>{item.product.product_name} - ${item.product.product_price}</span>
                <button onClick={() => removeFromCart(item)} className="px-3 py-1 bg-red-500 text-white rounded">Remove</button>
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold">Total Cost: ${totalCost}</p>
        </div>
      </div>
      <button onClick={() => console.log("Proceed to checkout")} className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Proceed to Checkout</button>
    </div>
  );
}

export default ShoppingCart;
