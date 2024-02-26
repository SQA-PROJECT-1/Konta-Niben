const User = require('../../models/userModel')
const jwt = require("jsonwebtoken");


/**
 * Controller function to handle user login.
 * @async
 * @function loginUser
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - Returns JSON object with user data and tokens or error message.
 */

const loginUser = async (req, res) => {

    // Destructuring request body to extract userEmail and userPassword
    const { userEmail, userPassword } = req.body;
    // Finding user in the database based on userEmail
    const user = await User.findOne({ userEmail: userEmail });
     // If user is not found, return status 401 (Unauthorized) with error message
    if (!user) {
      return res.status(401).json("User not found");
    }
     // If userPassword doesn't match, return status 400 (Bad Request) with error message
    if(userPassword!=user.userPassword){
        return res.status(400).json("Wrong Password")
    }
     
    try {
      const accessToken = await jwt.sign(
        { email: user.userEmail, id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1000000d" }
      );
      const refreshToken = await jwt.sign(
        { email: user.userEmail, id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1000000d" }
      );
      userObj = user.toJSON(user);
      userObj["accessToken"] = accessToken;
      userObj["refreshToken"] = refreshToken;

      userObj["userRole"] = user.userRole
      res.status(201).json(userObj);
    } catch (error) {
      console.log(error);
      res.status(400).json("User khuje paoa jaccche na");
    }
  }

module.exports = {loginUser}
