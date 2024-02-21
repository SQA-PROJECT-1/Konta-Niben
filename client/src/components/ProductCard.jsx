import React from "react";
import { FiHeart } from 'react-icons/fi';

/**
 * A React component representing a product card.
 * 
 * This component displays details of a product including its name, category, subcategory, price, and availability.
 * It also provides options to add the product to cart and to add it to wishlist.
 * 
 * @param {Object} props - The props object containing product.
 * @param {Object} props.product - The product object containing details of the product.
 * @param {string} props.product.productName - The name of the product.
 * @param {string} props.product.productCategory - The category of the product.
 * @param {string} props.product.productSubcategory - The subcategory of the product.
 * @param {number} props.product.productPrice - The price of the product.
 * @param {string} props.product.availability - The availability status of the product.
 * @returns {JSX.Element} The JSX representation of the product card component.
 */
const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-xl border p-4">
    <div className="text-lg font-semibold mb-2 h-16">{product.productName}</div>
    <div className="text-gray-600 mb-2">Category: {product.productCategory} <br/> Subcategory: {product.productSubcategory}</div>
    <div className="text-gray-600 mb-2">Price: ${product.productPrice}</div>
    <span className="border rounded-lg bg-green-700 text-white py-1 px-2">{product.availability}</span>
    <div className='flex mt-5'>
      <button className="w-full px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add to Cart</button>
      <button className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"><FiHeart /></button>
    </div>
  </div>
);

export default ProductCard;
