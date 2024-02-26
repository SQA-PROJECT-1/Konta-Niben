import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserComponents from '../components/UserComponents'
import AdminComponents from '../components/AdminComponents'

const DashboardAllAdmins = () => {
  const [users,setUsers] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/api/users/admins')
    .then(response => {
        setUsers(response.data)
    })
  })
  return (
    <div className="flex flex-wrap m-10 gap-5">
    { 
        users.map((user)=>(
            <AdminComponents user={user}/>         
        ))
    }
</div>
  )
}

export default DashboardAllAdmins