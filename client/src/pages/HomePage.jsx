import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
      // Fetch products from API
      axios.get("http://localhost:5000/api/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const fetchProducts = () => {  
    setProducts([]);  
    const info={
        productName: searchTerm,
        productCategory: searchTerm,
        productBrandName: searchTerm
  };
  axios.post(`http://localhost:5000/api/products/searchAndSortProducts?sortBy=${sortBy}`,info)
  .then(result=>{
    setProducts(result.data)
  })
}

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="flex mb-4">
        <input type="text" placeholder="Search by Product Name, Category, or Brand" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="mr-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="mr-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
          <option value="">Sort By</option>
          <option value="productPrice">Price</option>
          <option value="productName">Name</option>
        </select>
        <button onClick={fetchProducts} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Search & Sort</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.productId} className="bg-white rounded-lg shadow-lg p-4">
            <div className="text-lg font-semibold mb-2">{product.productName}</div>
            <div className="text-gray-600 mb-2">Category: {product.productCategory}</div>
            <div className="text-gray-600">Price: ${product.productPrice}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
