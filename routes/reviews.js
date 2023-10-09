const express = require('express');
const router = express.Router();
//need to create controllers
const reviewsController = require('../controllers/reviews');

//this gets all the reviews
router.get('/',reviewsController.getAll);

//this gets one review based on ID
router.get('/:id', reviewsController.getOne);

//then we need to create reviews, update and delete
router.post('/', reviewsController.createReview);

module.exports = router;
