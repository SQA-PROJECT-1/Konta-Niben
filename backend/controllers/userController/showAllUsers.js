const User = require('../../models/userModel')

/**
 * Retrieves all users from the database.
 * @async
 * @function showAllUsers
 * @param {Object} req - The request object sent by the client.
 * @param {Object} res - The response object used to send data back to the client.
 * @returns {Promise<void>} A Promise that resolves with the list of all users retrieved from the database and responds with a 200 OK status, or rejects if an error occurs during the retrieval process.
 */

const showAllUsers = async(req,res)=>{
    try{
      const allUsers =await User.find()
      if(!allUsers){
        return res.status(400).json("User not found")
      }
      res.status(200).json(allUsers)
    }
    catch(error) {
        res.status(500).json(error)
    }
}

module.exports = {showAllUsers}