/*const express = require('express');
const app = express();
const router = express.Router();
const loginController = require('../controllers/login.js');
const { requiresAuth } = require('express-openid-connect');

app.use(express.json());

router.get('/', loginController.login, loginController.login);
//router.get('/dashboard', loginController.dashboard);
//router.get('/login', (req,res)=>{
  //  res.send('login')});
app.get('/profile', requiresAuth(), (req,res)=> {
  res.send('profile I guess')
  //res.send(JSON.stringify(req.oidc.user));

});

module.exports = router;*/