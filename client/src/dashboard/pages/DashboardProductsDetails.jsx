import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

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

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then((response) => {
                const data = response.data
                setProduct(data)
            })
            .catch((error) => {
                console.log("Error fetching book data:", error);
            });
    })
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
            
          </Typography>
        
        </CardBody>
      </Card>
    </div>
    )
}

export default DashboardProductsDetails