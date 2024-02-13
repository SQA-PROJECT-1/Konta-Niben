const User = require('../../models/userModel')

const deleteUser = async(req,res)=>{
    try{
        const id = req.params.id
        const newUser = await User.findOne

    }
    catch(error) {
        res.status(500).json(error)
    }
}