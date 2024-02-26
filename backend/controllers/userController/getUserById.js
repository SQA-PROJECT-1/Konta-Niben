const User = require('../../models/userModel')

const getUserById = async(req,res)=>{
    try{
        const id = req.params.id
        const user = await User.findOne({userId:id})
        if(!user) {
            return res.status(400).json("Something went wrong to get user")
        }
        return res.status(200).json(user)

    }
    catch(error) {
        return res.status(500).json(error.message)
    }
}

module.exports = getUserById