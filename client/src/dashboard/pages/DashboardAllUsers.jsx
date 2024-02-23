import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserComponents from '../components/UserComponents'

const DashboardAllUsers = () => {
  const [users,setUsers] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/api/users')
    .then(response => {
        setUsers(response.data)
    })
  })
  return (
    <div className="flex flex-wrap m-10 gap-5">
    { 
        users.map((user)=>(
            <UserComponents user={user}/>         
        ))
    }
</div>
  )
}

export default DashboardAllUsers