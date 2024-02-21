const User = require('../../models/userModel')

const userProfile = async(req,res)=>{
    try {
        const email = req.user.userEmail
        const admin = await User.findOne({useEmail:email});
        res.status(200).json(admin);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong to get admin" });
      }
}

module.exports = userProfile