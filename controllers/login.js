const express = require('express');
const path = require('path')
const app = express();

var loginPath = express.static(path.join(__dirname, '/views'));
const login = async(req,res)=>{
    console.log(loginPath)
    //res.sendFile(loginPath +'/login.html')
};
const dashboard = async(req,res)=>{
    res.send('dashboard')
};

module.exports ={login,dashboard}