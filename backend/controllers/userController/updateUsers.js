const User = require('../../models/userModel')

/**
 * Updates a user by their ID with new user data.
 * @async
 * @function updateUsers
 * @param {Object} req - The request object sent by the client.
 * @param {string} req.params.id - The ID of the user to be updated.
 * @param {Object} req.body - The updated user data to be applied.
 * @param {Object} res - The response object used to send data back to the client.
 * @returns {Promise<void>} A Promise that resolves with the updated user object and responds with a 200 OK status, or rejects if an error occurs during the update process.
 */

const updateUsers = async(req,res)=>{
    try{
       const id = req.params.id
       const user = req.body
       const newUser = await User.findOneAndUpdate({userId:id},user,{new:true})
       res.status(200).json(newUser)
    }
    catch(error) {
        res.status(500).json(error)
    }
}

module.exports = {updateUsers}