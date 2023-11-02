const express = require('express');
const app = express();
const router = express.Router();
const gamesController = require('../controllers/games')
//need validation rules
//const{gameValidationRules, validate} = require

app.use(express.json());
router.get('/', gamesController.getAll);
router.get('/:id', gamesController.getOne);

module.exports=router;