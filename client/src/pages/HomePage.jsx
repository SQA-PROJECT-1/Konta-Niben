import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link ,useNavigate} from 'react-router-dom'
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);


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
        productBrandName: searchTerm,
        priceMin: minPrice,
        priceMax: maxPrice
  };
  axios.post(`http://localhost:5000/api/products/searchAndSortProducts?sortBy=${sortBy}`,info)
  .then(result=>{
    setProducts(result.data)
  })
}
const addProductToCart = (productId) => {
    
    // const storedData = localStorage.getItem('set-token-for-user');
    // const data=JSON.parse(storedData)
    // const data=JSON.parse(storedData)
    // alert(data)
   const userId=1;
   
    axios 
      .post(
        `http://localhost:5000/api/addToCart?userId=${userId}&productId=${productId}`
      )
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="flex mb-4">
        <input type="text" placeholder="Search by Product Name, Category, or Brand" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full mr-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        <input type="number" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="w-20 mr-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        <input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-20 mr-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="mr-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
          <option value="">Sort By</option>
          <option value="productPrice">Price</option>
          <option value="productName">Name</option>
        </select>
        <button onClick={fetchProducts} className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Search</button>
        <button className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"><FiHeart /></button>
        <Link to={'/home/cart'} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        <button>
          <MdOutlineShoppingCart />
        </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.productId} className="bg-white rounded-lg shadow-lg p-4">
            <div className="text-lg font-semibold mb-2 h-16">{product.productName}</div>
            <div className="text-gray-600 mb-2">Category: {product.productCategory}</div>
            <div className="text-gray-600">Price: ${product.productPrice}</div>
            <div className='flex'>
            <Link
                to={`/home/details/${product.productId}`}
                    className="bg-amber-600 text-white px-3 py-1 rounded-md">
                    Details
                </Link>
            <button onClick={() => addProductToCart(product.productId)} className="w-full px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add to Cart</button>
            <button className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"><FiHeart /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
