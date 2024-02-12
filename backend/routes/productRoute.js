const {setProducts,getProducts,deleteProducts,updateProducts} = require('../controllers/productController')
const {addToWishlist} = require('../controllers/wishlist')
const router = require('express').Router();


router.post("/",setProducts)
router.get("/",getProducts)
router.delete("/:product_id",deleteProducts)
router.put("/:product_id",updateProducts)

router.put("wishlist",addToWishlist)

module.exports = router;