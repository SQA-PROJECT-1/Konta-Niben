import React, { useEffect, useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

const DashboardAdminProfile = () => {
    const [profile,setProfile] = useState([])
    useEffect(()=>{
      const token = localStorage.getItem('set-token-for-user');
       fetch('http://localhost:5000/api/users/profile', {
        headers: {
            'Authorization': `Bearer ${token}`
        }})
       .then(response => response.json())
       .then(data => {
        setProfile(data) 
      })
    })

  const handleClick=()=>{
    localStorage.removeItem('set-token-for-user')
    window.location.reload()
  }
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
                <img className="absolute w-full h-full" src="https://media.istockphoto.com/vectors/smile-businessman-waving-vector-id656790154?k=6&m=656790154&s=612x612&w=0&h=wGdKY6RJe0gNnDZkl9aFqVKBG81rh-qPSB5whOkuE7g=" alt="" />
                <div className=" relative flex flex-col items-center justify-center text-gray-500">
                </div>
              </div>
          </div>
        </CardHeader>
        <CardBody className="flex flex-col  justify-center">
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            <p>
              <span className="font-bold">  Name: </span> {profile.userName}
            </p>
            <p>
              <span className="font-bold"> Email: </span> {profile.userEmail}
            </p>
            <p>
              <span className="font-bold"> Id: </span> {profile.userId}
            </p>
            <button  onClick={handleClick}className="bg-red-600 text-white px-3 py-2 mt-10 rounded-lg">Logout</button>
          </Typography>
        
        </CardBody>
      </Card>
    </div>
  )
}

export default DashboardAdminProfile