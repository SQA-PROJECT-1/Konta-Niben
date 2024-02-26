import axios from 'axios'
import React from 'react'

const AdminComponents = ({user}) => {
  
  const handleClick =(id)=>{
    console.log(id)
    axios.put(`http://localhost:5000/api/users/${id}`,{
      userRole:"user"
    })
    .then((response) => {
      if (response.status === 200) {
        alert("User Role Change  Successfully");
        windows.location.reload()
      } else {
        alert("User role not update!");
      }
      //console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  }
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"/>
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{user.userName}</div>
        <p class="text-gray-700 text-base">
            Name: {user.userName}
        </p>
        <p class="text-gray-700 text-base">
            Email: {user.userEmail}
        </p>
        <button onClick={()=>handleClick(user.userId)} className='bg-slate-500 text-white px-3 py-2 rounded-lg mt-5'>Remove From Admin</button>
    </div>
</div>
  )
}

export default AdminComponents