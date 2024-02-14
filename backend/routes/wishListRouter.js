const { addToWishlist, removeFromWishlist, getAllWishlistItems } = require('../controllers/wishlist')

const router = require('express').Router()


router.post("/", addToWishlist)
router.delete("/", removeFromWishlist)
router.get("/",getAllWishlistItems)

module.exports = router