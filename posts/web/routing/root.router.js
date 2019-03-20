const express = require('express');
const mongoose = require('mongoose');
const {Post} = require('../../models/post');

const router = express.Router();

const connectionString = 'mongodb://localhost';

router.get("/posts", async (req, res) =>{
    console.log('get posts');

    const connection = await mongoose.connect(connectionString,  {useNewUrlParser: true, dbName: 'posts'});
    const posts = await Post.find();
    await connection.disconnect();

    res.json(posts);
});

router.get("/:id", async (req, res) =>{
    console.log('get post');
    const id = req.params.id;
    const connection = await mongoose.connect(connectionString,  {useNewUrlParser: true, dbName: 'posts'});
    const post = await Post.findOne(post => post.id == id);
    console.log(post);
    await connection.disconnect();
    res.json(post);
});

module.exports = (app) => {
    app.use(router);
}