const User = require('../../models/userModel')

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