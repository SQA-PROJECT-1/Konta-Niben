const express = require('express');
const router = express.Router();
const addReview = require('../controllers/ReviewController/addReview');


// Routes for adding or updating reviews
router.post('/addOrUpdate', addReview.addOrUpdateReview);



module.exports = router;
