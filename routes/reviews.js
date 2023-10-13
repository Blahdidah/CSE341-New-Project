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

//this allows a review to be updated
router.put('/:id', reviewsController.updateReview);

//this allows a review to be deleted
router.delete('/:id', reviewsController.deleteReview);

//this exports the routes
module.exports = router;
