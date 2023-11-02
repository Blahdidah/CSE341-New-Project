const express = require('express');
const app = express();
const router = express.Router();
const gamesController = require('../controllers/games')
//need validation rules
const{gameValidationRules, validate} = require('../validator')

app.use(express.json());
//returns all the games in the DB
router.get('/', gamesController.getAll);
//returns just one game per ID
router.get('/:id', gamesController.getOne);
//router.post('/',gameValidationRules(), gamesController.createGameEntry )

module.exports=router;