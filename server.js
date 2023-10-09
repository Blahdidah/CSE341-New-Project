//this file connects to the db
const express = require('express');
const bodyParser =require('body-parser');
const mongodb = require('./database/connect')
const port = process.env.port;
const app = express();

app
    .use(bodyParser.json())
    .use((req,res,next) => {
        res.setHeader('access-controll-allow-origin','*');
        next();
})
    .use('/', require('./routes'));

mongodb.initDb((err, mongodb) =>{
    if (err){
        console.log(err);
    }else{
        app.listen(port);
        console.log(`connected to db and listening on ${port}`);
        console.log('videogames ftw');
        console.log('this will be awesome.')
    }
});