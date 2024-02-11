const {setProducts,getProducts} = require('../controllers/productController')
const router = require('express').Router();


router.post("/",setProducts);
router.get("/",getProducts)
module.exports = router;