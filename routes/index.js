//this file will have my endpoints
const { auth, requiresAuth } = require('express-openid-connect');
const {MongoClient} = require('mongodb');
const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config;
//auth0 config
const config ={
    authRequired: false,
    auth0Logout: true,
    secret: process.env.configsecret,
    baseURL: process.env.baseURL,
    clientID: process.env.configClientId,
    issuerBaseURL: process.env.configIssuerBaseURL
    };
//swagger route
router.use('/', require('./swagger'));
//login page
router.get('/login', auth(config), (req, res)=>{
})
//logging in route

//for reviews/games
router.use('/reviews', requiresAuth(), require('./reviews'));
router.use('/games', require('./games'));
router.post('/login', auth(config), (req, res)=>{
    res.send("you're logged in")
})

//callback route
router.post('/callback', (req, res)=>{
    res.send('callback page'); //figure out what this is I guess? and render a page or something)
})
router.get('/profile', requiresAuth(), (req,res)=>{
    res.send('Profile Page'); //a profile page!
})
router.get('/', (req, res)=>{
    if (req.oidc.isAuthenticated()==true){
        res.send("you're logged in!")
        //this should display a profile page for the user
    }
    else{
        res.send("You're logged out")
    }
})
//check if you're logged in or out, displays a status depending
router.get('/checkLoginStatus',(req,res)=>{
    res.send(req.oidc.isAuthenticated()? 'Logged In':'Logged Out');
        
});
/*router.use((err,req, res, next)=>{
    if(err.name === "UnauthorizedError"){
        return res.status(401).send('Unauthorized');
    }
    console.error('Authentication error:', err);
    res.status(500).send('Authentication error')
});
*/
module.exports = router, requiresAuth;