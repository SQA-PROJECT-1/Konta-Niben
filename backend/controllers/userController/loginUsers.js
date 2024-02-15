const User = require('../../models/userModel')
const jwt = require("jsonwebtoken");


const loginUser = async (req, res) => {
    const { email, userPassword } = req.body;
    const user = await User.findOne({ email: email });
    //console.log(userPassword+" "+user.userPassword)
    if (!user) {
      return res.status(401).json("User not found");
    }
    if(userPassword!=user.userPassword){
        return res.status(400).json("Wrong Password")
    }
     
    try {
      const accessToken = await jwt.sign(
        { email: user.email, id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1000000d" }
      );
      const refreshToken = await jwt.sign(
        { email: user.email, id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1000000d" }
      );
      userObj = user.toJSON(user);
      userObj["accessToken"] = accessToken;
      userObj["refreshToken"] = refreshToken;
      res.status(201).json(userObj.accessToken);
    } catch (error) {
      console.log(error);
      res.status(400).json("User khuje paoa jaccche na");
    }
  }

module.exports = {loginUser}
