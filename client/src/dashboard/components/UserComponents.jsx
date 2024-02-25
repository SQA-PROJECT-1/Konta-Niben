import React from 'react'

const UserComponents = ({user}) => {
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
    </div>
</div>
  )
}

export default UserComponents