import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiHeart } from 'react-icons/fi';
import { MdOutlineShoppingCart } from 'react-icons/md';
import Modal from 'react-modal';

const HomePage = () => {
  
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [isWishListModalVisible, setIsWishListModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchProducts = async () => {
    setProducts([]);
    setLoading(true);

    try {
      const info = {
        productName: searchTerm,
        productCategory: searchTerm,
        productBrandName: searchTerm,
        priceMin: minPrice,
        priceMax: maxPrice,
      };
      const response = await axios.post(
        `http://localhost:5000/api/products/searchAndSortProducts?sortBy=${sortBy}`,
        info
      );
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const wishListUpdate = async (productId) => {
    const userId = 1;

    try {
      const checkResponse = await axios.get(
        `http://localhost:5000/api/wishList/check/?userId=${userId}&productId=${productId}`
      );
      console.log(checkResponse.data.statusCode);

      if (checkResponse.data.statusCode === 2) {
        setMessage(
          'This item already exists in the wishlist. Do you want to remove it from the list?'
        );
        setSelectedProductId(productId);
        setIsWishListModalVisible(true);
      } else {
        await axios.post(
          `http://localhost:5000/api/wishList/?userId=${userId}&productId=${productId}`
        );
        setMessage('Product added to wishlist successfully!');
        setIsSuccessModalVisible(true);
        console.log('Product added to wishlist successfully');
      }
    } catch (error) {
      console.error('Error updating wishlist:', error);
    }
  };

  const handleWishListYesClick = async () => {
    const userId = 1;

    try {
      if (selectedProductId) {
        await axios.delete(
          `http://localhost:5000/api/wishList?userId=${userId}&productId=${selectedProductId}`
        );
        console.log('API call successful');
      }
    } catch (error) {
      console.error('Error making API call:', error);
    }

    // Close the modal
    setIsWishListModalVisible(false);
    setSelectedProductId(null);
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalVisible(false);
  };

  const SuccessModal = ({ isOpen, onClose, message }) => {
    const customStyles = {
      content: {
        width: '300px',
        height: '200px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    };

    useEffect(() => {
      let timeoutId;

      if (isOpen) {
        // Set a timeout to close the modal after 2000 milliseconds (2 seconds)
        timeoutId = setTimeout(() => {
          onClose();
        }, 1000);
      }

      return () => {
        // Clear the timeout if the component unmounts or modal is closed manually
        clearTimeout(timeoutId);
      };
    }, [isOpen, onClose]);

    return (
      <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
        <p>{message}</p>
      </Modal>
    );
  };

  const CustomModal = ({ isOpen, onClose, message, onYesClick, onNoClick }) => {
    const customStyles = {
      content: {
        width: '300px',
        height: '200px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    };

    return (
      <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
        <p>{message}</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={onYesClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Yes
          </button>
          <button
            onClick={onNoClick}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            No
          </button>
        </div>
      </Modal>
    );
  };

  const getAllWishList = async () => {
    const userId = 1;
    const checkResponse = await axios.get(
      `http://localhost:5000/api/wishList/?userId=${userId}`
    );
    console.log(checkResponse.data);
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      {loading && <p>Loading...</p>}
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search by Product Name, Category, or Brand"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mr-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-20 mr-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-20 mr-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="mr-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          <option value="">Sort By</option>
          <option value="productPrice">Price</option>
          <option value="productName">Name</option>
        </select>
        <button
          onClick={fetchProducts}
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>
        <button
          onClick={getAllWishList}
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          <FiHeart />
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 hover:"
        >
          <MdOutlineShoppingCart />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.productId} className="bg-white rounded-lg shadow-lg p-4">
            <div className="text-lg font-semibold mb-2 h-16">{product.productName}</div>
            <div className="text-gray-600 mb-2">Category: {product.productCategory}</div>
            <div className="text-gray-600">Price: ${product.productPrice}</div>
            <div className="flex">
              <button className="w-full px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Add to Cart
              </button>
              <button
                onClick={() => wishListUpdate(product.productId)}
                className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                <FiHeart />
              </button>
            </div>
          </div>
        ))}
      </div>

      <CustomModal
        isOpen={isWishListModalVisible}
        onClose={() => setIsWishListModalVisible(false)}
        message={message}
        onYesClick={handleWishListYesClick}
        onNoClick={() => setIsWishListModalVisible(false)}
      />

      <SuccessModal
        isOpen={isSuccessModalVisible}
        onClose={handleSuccessModalClose}
        message={message}
      />
    </div>
  );
};

export default HomePage;
