//this file will have my endpoints
const { auth, requiresAuth } = require('express-openid-connect');
//const app = express();
const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config;


const config ={
    authRequired: false,
    auth0Logout: true,
    secret: process.env.secret,
    baseURL: process.env.baseURL,
    clientID: process.env.configClientId,
    issuerBaseURL: process.env.configIssuerBaseURL
    };

router.use('/', require('./swagger'));


//to use Auth0 attaches /login /logout and /callback to the base URL on line below
router.use(auth(config));
router.use('/reviews', requiresAuth(), require('./reviews'));
router.use('/games', require('./games'));
router.get('/', (req, res)=>{
    if (req.oidc.isAuthenticated()==true){
        res.send("you're logged in!")
        //this should display a profile page for the user
    }
    else{
        res.send("You're logged out")
        // this should display a bleh page
    }
})
//check if you're logged in or out, displays a status depending
router.get('/checkLoginStatus',(req,res)=>{
    res.send(req.oidc.isAuthenticated()? 'Logged In':'Logged Out');
        
});


module.exports = router, requiresAuth;