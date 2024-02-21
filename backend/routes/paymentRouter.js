const orderAndPayment = require('../controllers/paymentController/orderAndPayment');
const test = require('../controllers/paymentController/test');

const router = require('express').Router();

router.post("/initiated", orderAndPayment.orderAndPayment);
// router.get("/validate",)
router.post("/",test);
router.post("/success/:id",orderAndPayment.redirect)

module.exports = router;
