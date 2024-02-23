const orderAndPayment = require('../controllers/paymentController/orderAndPayment');

const router = require('express').Router();

router.post("/initiated", orderAndPayment.orderAndPayment);
// router.get("/validate",)
router.post("/success/:id",orderAndPayment.redirect)

module.exports = router;
