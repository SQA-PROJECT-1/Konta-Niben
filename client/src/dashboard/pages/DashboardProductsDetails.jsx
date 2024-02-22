import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import AddReviewModal from './AddReviewModal';
import { Link ,useNavigate} from 'react-router-dom'


import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

const DashboardProductsDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [isModalOpen, setModalOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleAddReview = async (reviewData) => {
    const { message, rating } = reviewData;
    const productId = id; // Assuming 'id' is in scope
    const userId = 1; // Replace with your actual user ID
  
    try {
      // Make a POST request to your API
      const response = await axios.post('http://localhost:5000/api/products/review/addOrUpdate', {
        productId,
        userId,
        message,
        rating,
      });
      setRating(response.data.data.averageRating);
    //  console.log('Review added successfully:', response.data.data.averageRating);
  
      // You may want to update the rating state or fetch updated data here
    } catch (error) {
      console.error('Error adding review:', error);
      // Handle error appropriately (e.g., show an error message to the user)
    }
  };


    const renderStars = () => {
      const filledStars = rating > 0 ? Math.min(rating, 5) : 0;
      const emptyStars = 5 - filledStars;

      const stars = [];

      for (let i = 0; i < filledStars; i++) {
          stars.push(<FaStar key={i} color="#FFD700" size={20} />);
      }

      for (let i = 0; i < emptyStars; i++) {
          stars.push(<FaStar key={`empty-${i}`} color="#CCCCCC" size={20} />);
      }

      return (
        <div className="flex">
          {stars}
        </div>
      );
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
        .then((response) => {
            const data = response.data;
            setProduct(data);
        })
        .catch((error) => {
            console.log("Error fetching book data:", error);
        });

    axios.get(`http://localhost:5000/api/products/review/review?productId=${id}`)
        .then((response) => {
            const data = response.data;
           
            setRating(data.data.averageRating);
        })
        .catch((error) => {
            console.error('Error fetching product rating:', error);
        });
}, [id]); 

    return (
       <div className=" h-screen flex items-center justify-center bg-teal-50 mt-5">
      <Card className="w-full max-w-[70rem] h-3/4 flex-row gap-10">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none border-2"
        >
          <div className="">
              <div>
                <img className="absolute w-full h-full" src="https://i.ibb.co/G2Fz4pb/blank-1.jpg" alt="" />
                <div className=" relative flex flex-col items-center justify-center text-gray-500">
                </div>
              </div>
          </div>
        </CardHeader>
        <CardBody className="flex flex-col  justify-center">
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            <p>
              <span className="font-bold"> Product Name: </span> {product.productName}
            </p>
            <p>
              <span className="font-bold"> Product Price: </span> {product.productPrice}
            </p>
            <p>
              <span className="font-bold"> Product Category: </span> {product.productCategory}
            </p>
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            <p>
              <span className="font-bold">Product Subcategory :</span> {product.productSubcategory}
            </p>
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            <p>
              <span className="font-bold">Product Quantity : </span>
              {product.productQuantity}
            </p>
            <p>
              <span className="font-bold">Product BrandName : </span>
              {product.productBrandName}
            </p>
            <p>
              <span className="font-bold">Product Description : </span>
              {product.productDescription}
            </p>
            <p>
            <span className="font-bold"> </span> <br></br>
            {/* Add stars here */}  {renderStars()}
            <br></br>
            <button   onClick={openModal} className="bg-green-600 text-white px-3 py-1 rounded-md m-2">Add review</button> 
            <Link
            to={`/dashboard/products/review/${id}`}
            className="bg-amber-600 text-white px-3 py-1 rounded-md">
            View all review
        </Link>
 
            <AddReviewModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleAddReview} />
        
        </p>
        
          </Typography>
       
        </CardBody>
        
      </Card>
    
    </div>
    
    )
}

export default DashboardProductsDetails