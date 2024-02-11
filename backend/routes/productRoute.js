const {setProducts,getProducts,deleteProducts,updateProducts} = require('../controllers/productController')
const router = require('express').Router();


router.post("/",setProducts)
router.get("/",getProducts)
router.delete("/:product_id",deleteProducts)
router.put("/:product_id",updateProducts)
module.exports = router;