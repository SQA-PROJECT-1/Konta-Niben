const User = require('../models/userModel')
const addToWishlist = async (req, res) => {
   const {id}=req.user;
   const {prodId}=req.body;
    try {
        const user= await User.findById(id); //user model
        const alreadyadded=user.wishlist.find((id)=>id.toString()===prodId);
        if(alreadyadded){
            // if already added then remove from wishlist
         let user=await User.findByIdUpdate(
           id,
           {
            $pull:{wishlist:prodId},
           },
           {
            new:true
           }
         );
         res.json(user);
        }
        else{
            //if not added then push in wishlist
            let user=await User.findByIdUpdate(
                id,
                {
                 $push:{wishlist:prodId},
                },
                {
                 new:true
                }
              );
        }
        }
    catch (error) {
      console.error('Error adding item to wishlist:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports={
    addToWishlist, 
}