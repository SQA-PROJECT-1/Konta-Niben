const User = require('../../models/userModel')

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