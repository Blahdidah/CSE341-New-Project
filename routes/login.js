const express = require('express');
const app = express();
const router = express.Router();
const loginController = require('../controllers/login.js');

app.use(express.json());

router.get('/', loginController.login);
router.get('/dashboard', loginController.dashboard);
//router.get('/login', (req,res)=>{
  //  res.send('login')});
//router.get('/dashboard', (req,res)=>{
  //  res.send('dashboard')
//})

module.exports = router;