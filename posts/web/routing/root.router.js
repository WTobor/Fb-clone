const express = require('express');
const chokidar = require('chokidar');
const fs = require('fs');

const router = express.Router();

function loadJSON(path) {
    return JSON.parse(fs.readFileSync(path).toString());
}

let posts = loadJSON('./fakes/posts.json');

chokidar.watch('./fakes/*').on('all', () => {
    posts = loadJSON('./fakes/posts.json');
})

router.get("/posts", (req, res) =>{
    console.log('get posts');
    res.json(posts);
});

router.get("/:id", (req, res) =>{
    console.log('get post');
    const postId = req.params.id;
    const post = posts.find((post) => post.id === postId);
    res.json(post);
});

module.exports = (app) => {
    app.use(router);
}