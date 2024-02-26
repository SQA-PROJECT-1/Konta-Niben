const User = require('../../models/userModel')

/**
 * Creates a new user and saves it to the database.
 * @async
 * @function createUsers
 * @param {Object} req - The request object sent by the client.
 * @param {string} req.body.userId - The ID of the user.
 * @param {string} req.body.userName - The name of the user.
 * @param {string} req.body.userEmail - The email of the user.
 * @param {Object} res - The response object used to send data back to the client.
 * @returns {Promise<void>} A Promise that resolves when the user is successfully created and saved to the database, or rejects if an error occurs.
 * @throws {Error} If an error occurs during the user creation process.
 */

const createUsers = async(req,res)=>{
    try{
        const {userId,userName,userEmail, userPassword} = req.body
       
        if(!userId|| !userName || !userEmail ) {
            return res.status(400).json("Please enter userId, userName, userEmail")
        }
        const userObj = {
            userId: userId,
            userName: userName,
            userEmail:userEmail,
            userPassword: userPassword
        }
        
        const user = new User(userObj)
        await user.save()
        res.status(201).json(user)
    }
    catch(error) {
        res.status(500).json("Internal Server Error")
    }
}

module.exports = {createUsers}
