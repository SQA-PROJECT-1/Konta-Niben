const {updateProducts} = require('../controllers/productController/updateProducts')
const {getProducts} = require('../controllers/productController/getProducts')
const {deleteProducts} = require('../controllers/productController/deleteProducts')
const {setProducts} = require('../controllers/productController/setProducts');
const { sortProducts } = require('../controllers/productController/sortProducts');
const { searchProducts } = require('../controllers/productController/searchProducts');
const { searchAndSortProducts } = require('../controllers/productController/searchAndSortProducts');


const router = require('express').Router();

router.post("/",setProducts)
router.get("/",getProducts)
router.delete("/:productId",deleteProducts)
router.put("/:productId",updateProducts)
router.get("/sortProducts",sortProducts)
router.post("/searchProducts",searchProducts)
router.post("/searchAndSortProducts",searchAndSortProducts)
module.exports = router;