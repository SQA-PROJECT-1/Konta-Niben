const User = require('../../models/userModel')

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