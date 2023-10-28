const express = require('express');
const path = require('path')

const loginPath = express.static(path.join(__dirname, '/views'));

const login = async(req,res)=>{
    //console.log(path.join(__dirname, '../views', 'login.html'))
    //res.send('login')
    res.sendFile(path.join(__dirname, '../views', 'login.html'))
};
const dashboard = async(req,res)=>{
    res.send('dashboard')
};

module.exports ={login,dashboard}