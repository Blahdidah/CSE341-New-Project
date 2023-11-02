const mongodb = require('../database/connect');
const ObjectId = require('mongodb').ObjectId;

//gets all the games in the db
const getAll = async(req, res, next)=>{
    const result = await mongodb.getDb().db('project2').collection('games').find();
    result.toArray().then((lists)=>{
        res.setHeader('content-type', 'application/json');
        res.status(200).json(lists);
    });
}
//gets one game from the db
const getOne = async (req, res, next)=>{
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('project2').collection('games').findOne({_id:userId})

if(result==null){
    res.setHeader('content-type','application/json');
    res.status(400).send(`Entry ${userId} was not found, please check the userId and try again`);
}else{
        res.setHeader('content-type','application/json');
        res.status(200).json(result);
}}

const createGameEntry = async(req, res)=>{
    const game = {
        title: req.body.title,
        genre: req.body.genre,
        platform: req.body.platform,
        releaseDate: req.body.releaseDate,
    };
    //send to DB
    const response = await mongo.getDb().db('project2').collection('games').insertOne(game);
    //feedback from the review
    if (response.acknowledged){
        res.status(201).json(response);
    }else{
        res.status(500).json(response.error ||'An error occurred while inserting your game, please check the DB and try again.')
    }
}
const updateGame = async(req,res)=>{
    const userId = new ObjectId(req.params.id);
    const game = {
        title: req.body.title,
        genre: req.body.genre,
        platform: req.body.platform,
        releaseDate: req.body.releaseDate,
    };
    const response = await mongodb.getDb().db('project2').collection('games').replaceOne({_id:userId}, game); 
    console.log(response);
    if(response.modifiedCount > 0){
        res.status(204).send();
    }else{
        res.status(500).json(response.error||'An error occured while updating the game information');
    }
}

const deleteGame = async(req, res)=>{
    const userId = new ObjectId(req.params.id);
    const validhex = /[0-9A-Fa-f]{24}/
    if(validhex.test(userId)){
        const response = await mongodb.getDb().db('project2').collection('games').deleteOne({_id:userId}, true);
        if(response.deletedCount == 0){
            res.status(500).json(response.error || 'The ID entered did not return a valid game en try, please try again.')
        }else{
            var title = response.title 
        res.status(200).send(`${userId}, or ${title} has been successfully deleted`);
        }
    }else{
        res.status(500).json(Response.error || 'An error occured while deleting the contact. Please check the Database.')
    }
}

module.exports ={getAll, getOne, createGameEntry, updateGame};