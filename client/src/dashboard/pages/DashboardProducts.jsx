import React from 'react'
import  { useEffect, useState } from 'react';
import ProductComponents from '../components/ProductComponents';

const DashboardProducts = () => {

    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data)
        })
    })
  return (
    <div className="flex flex-wrap m-10 gap-5">
        { 
            products.map((product)=>(  
                <ProductComponents product={product}/>
            ))
        }
        
    </div>
  )
}

export default DashboardProducts