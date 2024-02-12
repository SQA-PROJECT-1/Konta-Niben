const {setProducts,getProducts,deleteProducts,updateProducts, searchProducts} = require('../controllers/productController')
const router = require('express').Router();


router.post("/",setProducts)
router.get("/",getProducts)
router.delete("/:product_id",deleteProducts)
router.put("/:product_id",updateProducts)
router.post("/searchProducts",searchProducts)
module.exports = router;