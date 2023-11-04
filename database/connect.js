//this file will allow the user to connect
const dotenv = require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;



let _db;

const initDb = (callback) =>{
    //so a statement and a return for if the DB is already initialized
    if(_db){
        console.log('db is already initialized!');
        return callback(null, _db);
    }
    MongoClient.connect(process.env.uri)
        .then((client) =>{
            _db = client;
            callback(null, _db);
        })
        //a catch in case of errors
        .catch((err) =>{
            callback(err);
        });
};
const getDb = () =>{
    if (!_db){
        throw error ('db not initialized');
    }
    return _db;
};

module.exports ={
    initDb,
    getDb
};