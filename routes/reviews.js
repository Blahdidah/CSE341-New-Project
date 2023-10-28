const express = require('express');
const app = express();
const router = express.Router();
//need to create controllers
const reviewsController = require('../controllers/reviews');
const {reviewValidationRules, validate} = require('../validator')

app.use(express.json());

//this gets all the reviews, can't really validate when it's getting everything
router.get('/',reviewsController.getAll);

//this gets one review based on ID... Can I validate??
router.get('/:id', reviewsController.getOne);

//creation of review and validation.
router.post('/', reviewValidationRules(), validate, reviewsController.createReview);

//this allows a review to be updated, requires ID and then will validate incoming data.
router.put('/:id', reviewValidationRules(), validate, reviewsController.updateReview);

//this allows a review to be deleted
router.delete('/:id', reviewsController.deleteReview);


//this exports the routes
module.exports = router;
