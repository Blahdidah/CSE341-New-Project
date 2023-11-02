const mongodb = require('../database/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async(req, res, next)=>{
    const result = await mongodb.getDb().db('project2').collection('games').find();
    result.toArray().then((lists)=>{
        res.setHeader('content-type', 'application/json');
        res.status(200).json(lists);
    });
}

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

module.exports ={getAll, getOne};