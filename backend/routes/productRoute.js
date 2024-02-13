const {updateProducts} = require('../controllers/productController/updateProducts')
const {getProducts} = require('../controllers/productController/getProducts')
const {deleteProducts} = require('../controllers/productController/deleteProducts')
const {setProducts} = require('../controllers/productController/setProducts')


const router = require('express').Router();

router.post("/",setProducts)
router.get("/",getProducts)
router.delete("/:productId",deleteProducts)
router.put("/:productId",updateProducts)
module.exports = router;