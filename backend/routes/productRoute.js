const {setProducts,getProducts,deleteProducts,updateProducts, searchProducts, sortProducts} = require('../controllers/productController')
const router = require('express').Router();


router.post("/",setProducts)
router.get("/",getProducts)
router.delete("/:product_id",deleteProducts)
router.put("/:product_id",updateProducts)
router.post("/searchProducts",searchProducts)
router.get("/sortProducts", sortProducts);
module.exports = router;