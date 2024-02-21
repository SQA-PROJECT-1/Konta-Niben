const express = require('express');
const router = express.Router();
const addReview = require('../controllers/ReviewController/addReview');


// Routes for adding or updating reviews
router.post('/addOrUpdate', addReview.addOrUpdateReview);
router.get('/review', addReview.getAllReviewsForProduct);


module.exports = router;
