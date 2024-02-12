const {setProducts,getProducts,deleteProducts,updateProducts} = require('../controllers/productController')
const router = require('express').Router();


router.post("/",setProducts)
router.get("/",getProducts)
router.delete("/:productId",deleteProducts)
router.put("/:productId",updateProducts)
module.exports = router;