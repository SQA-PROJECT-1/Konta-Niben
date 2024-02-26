import axios from 'axios'
import React from 'react'

const UserComponents = ({user}) => {
  
  const handleClick =(id)=>{
    console.log(id)
    axios.put(`http://localhost:5000/api/users/${id}`,{
      userRole:"admin"
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

  const handleDelete=(id)=>{
    axios.delete(`http://localhost:5000/api/users/${id}`,{
      userRole:"admin"
    })
    .then((response) => {
      if (response.status === 200) {
        alert("User removed Successfully");
        windows.location.reload()
      } else {
        alert("User not deleted!");
      }
      //console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  }
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img src="https://th.bing.com/th/id/R.857b26dafe5b74439d5fcfc23b77aa1a?rik=cZdp5iaYNAxWTA&riu=http%3a%2f%2fwww.liveadmins.com%2fwp-content%2fuploads%2f2015%2f09%2fProduct-Launch.jpg&ehk=tqhzE2p1F9XQzyKdEXTPZHADJpLq8vcw3fLXgv25J%2bE%3d&risl=&pid=ImgRaw&r=0" />
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{user.userName}</div>
        <p class="text-gray-700 text-base">
            Name: {user.userName}
        </p>
        <p class="text-gray-700 text-base">
            Email: {user.userEmail}
        </p>
        <div className='flex gap-5'>
        <div>
        <button onClick={()=>handleClick(user.userId)} className='bg-slate-500 text-white px-3 py-2 rounded-lg mt-5'>Make Admin</button></div>
        <div>
        <button onClick={()=>handleDelete(user.userId)} className='bg-slate-500 text-white px-3 py-2 rounded-lg mt-5'>Delete User</button>
        </div>
        </div>
    </div>
</div>
  )
}

export default UserComponents