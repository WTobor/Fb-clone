const express = require('express');
const chokidar = require('chokidar');
const fs = require('fs');

const router = express.Router();

function loadJSON(path) {
    return JSON.parse(fs.readFileSync(path).toString());
}

chokidar.watch('./fakes/*').on('all', () => {
    this.posts = loadJSON('./fakes/posts.json');
})

let posts = loadJSON('./fakes/posts.json');

router.get("/", (req, res) => res.end(JSON.stringify("hello posts")));
router.get("/posts", (req, res) =>{
    res.end(JSON.stringify(this.posts));
});

router.get("/posts/:id", (req, res) =>{
    const data = JSON.parse(fs.readFileSync('./fakes/posts.json').toString());
    const post = data.find((post) => post.id === postId);
    res.end(JSON.stringify(post));
});
router.get("*", (req, res) => res.end("error"));

module.exports = (app) => {
    app.use(router);
}