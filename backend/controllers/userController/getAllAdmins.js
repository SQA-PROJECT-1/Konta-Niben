const User = require('../../models/userModel')

const getAllAdmins = async(req,res)=>{
    try{
        const admins = await User.find({userRole:'admin'})
        if(!admins){
            return res.status(400).json("No admins found")
        }
        res.status(200).json(admins)
    }
    catch(error){
        return res.status(500).json(error.message)
    }
}

module.exports ={ getAllAdmins}