const express = require('express');
const chokidar = require('chokidar');
const fs = require('fs');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

function loadJSON(path) {
    return JSON.parse(fs.readFileSync(path).toString());
}

let posts = loadJSON('./fakes/secret-posts.json');

chokidar.watch('./fakes/*').on('all', () => {
    posts = loadJSON('./fakes/secret-posts.json');
})

router.get("/", authenticate, (req, res) =>{
    res.json(posts);
});

router.get("/:id", authenticate, (req, res) =>{
    const postId = req.params.id;
    const post = posts.find((post) => post.id === postId);
    res.json(post);
});

module.exports = (app) => {
    app.use('/secret', router);
}