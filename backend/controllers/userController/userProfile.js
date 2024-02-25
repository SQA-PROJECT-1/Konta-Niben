const User = require('../../models/userModel')

/**
 * Retrieves the profile of the currently logged-in user.
 * @async
 * @param {Object} req - The request object containing user information.
 * @param {Object} res - The response object to send the user profile.
 * @returns {Promise<void>} The profile of the logged-in user.
 */

const userProfile = async(req,res)=>{
    try {
      // Get the email of the logged-in user from the request object
        const email = req.user.userEmail
        // Find the user in the database based on the email
        const admin = await User.findOne({useEmail:email});

        // Send the user profile in the response
        res.status(200).json(admin);
      } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ message: "Something went wrong to get admin" });
      }
}

module.exports = userProfile