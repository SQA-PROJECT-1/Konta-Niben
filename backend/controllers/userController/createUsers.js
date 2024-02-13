const User = require('../../models/userModel')

const createUsers = async(req,res)=>{
    try{
        const {userId,userName,userEmail} = req.body

        if(!userId|| !userName || !userEmail ) {
            return res.status(400).json("Please enter userId, userName, userEmail")
        }
        const userObj = {
            userId: userId,
            userName: userName,
            userEmail:userEmail
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
