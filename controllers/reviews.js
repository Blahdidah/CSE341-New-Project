const { mongo } = require('mongoose');
const mongodb = require('../database/connect');
const ObjectId = require('mongodb').ObjectId;

//all of the reviews in the review database

const getAll = async(req, res, next)=>{
    const result = await mongodb.getDb().db('project2').collection('reviews').find();
    result.toArray().then((lists)=>{
        res.setHeader('content-type','application/json');
        res.status(200).json(lists);
    })
};

//this gets one entry based on ID
const getOne = async (req, res, next)=>{
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('project2').collection('reviews').find({_id: userId});
    result.toArray().then((lists)=>{
        res.setHeader('content-type','application/json');
        res.status(200).json(lists[0]);
    })
};

//creating a review
const createReview = async(req, res)=>{
    //creating the review fields
    const review = {
        author: req.body.author,
        title: req.body.title,
        musicR:req.body.musicR,
        gameplayR:req.body.gameplayR,
        storyR: req.body.storyR,
        overallRating: req.body.overallRating,
        comments: req.body.comments
    };
    //send it to the DB
    const response = await mongodb.getDb().db('project2').collection('reviews').insertOne(review);
    //feedback from the DB
if (response.acknowledged){
    res.status(201).json(response);
}else{
    res.status(500).json(response.error || 'An error occurred while inserting your review, please check the DB and try again.')
}
};
//This contacts the DB and updates an entry using the id provided
const updateReview = async(req, res)=>{
    const userId = new ObjectId(req.params.id);
    //review information
    const review = {
        author: req.body.author,
        title: req.body.title,
        musicR:req.body.musicR,
        gameplayR:req.body.gameplayR,
        storyR: req.body.storyR,
        overallRating: req.body.overallRating,
        comments: req.body.comments
    };
    const response = await mongodb.getDb().db('project2').collection('reviews').replaceOne({_id:userId}, review); 
    console.log(response);
    if(response.modifiedCount > 0){
        res.status(204).send();
    }else{
        res.status(500).json(response.error||'An error occured while updating the review');
    }
}

//this contacts the DB and deletes an entry using the id provided
const deleteReview = async(req,res) =>{
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db('project2').collection('reviews').deleteOne({_id:userId}, true);
    console.log(response);
    if (response.deletedCount >0){
        res.status(200).send();
    }else{
        res.status(500).json(response.error || 'An error occured while deleting the contact. Please check the Database.')
    }
};

module.exports = {getAll, getOne, createReview};