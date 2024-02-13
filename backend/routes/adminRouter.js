const {adminDashboard } = require('../controllers/adminController/adminDashboard')

const router = require('express').Router();

router.get("/",adminDashboard)

module.exports = router