const express = require('express');
const router = express.Router();
const addReview = require('../controllers/ReviewController/addReview');
const getReview = require('../controllers/ReviewController/getAllReview');


// Routes for adding or updating reviews
router.post('/addOrUpdate', addReview.addOrUpdateReview);
router.get('/review', getReview.getAllReviewsForProduct);


module.exports = router;
