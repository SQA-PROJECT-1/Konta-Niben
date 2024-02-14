const User = require('../../models/userModel')

/**
 * Deletes a user by their ID.
 * @async
 * @function deleteUsers
 * @param {Object} req - The request object sent by the client.
 * @param {string} req.params.id - The ID of the user to be deleted.
 * @param {Object} res - The response object used to send data back to the client.
 * @returns {Promise<void>} A Promise that resolves when the user is successfully deleted and the response is sent, or rejects if an error occurs.
 */

const deleteUsers = async(req,res)=>{
    try{
        const id = req.params.id
        const newUser = await User.findOneAndDelete({userId:id})
        if(!newUser) {
            res.status(400).json("User not found")
        }
        res.status(200).json(newUser)
    }
    catch(error) {
        res.status(500).json(error)
    }
}

module.exports = {deleteUsers}