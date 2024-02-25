const User = require('../../models/userModel')

/**
 * Retrieves all users from the database whose role is not 'admin'.
 * @async
 * @function showAllUsers
 * @param {Object} req - The request object sent by the client.
 * @param {Object} res - The response object used to send data back to the client.
 * @returns {Promise} A Promise that resolves with the list of all users retrieved from the database and responds with a 200 OK status, 
 *                    or rejects with a 500 Internal Server Error status if an error occurs during the retrieval process. 
 *                    If no users are found, it responds with a 400 Bad Request status.
 */

const showAllUsers = async(req,res)=>{
    try{
      const allUsers = await User.find({ userRole: { $ne: 'admin' } });
      if(!allUsers || allUsers.length==0){
        return res.status(400).json("User not found")
      }
      res.status(200).json(allUsers)
    }
    catch(error) {
        res.status(500).json(error.message)
    }
}

module.exports = {showAllUsers}