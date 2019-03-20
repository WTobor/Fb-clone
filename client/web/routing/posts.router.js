const fetch = require('node-fetch');
const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.end(JSON.stringify(`hello client`))
});

router.get("/posts", (req, res) => {
    fetch('http://localhost:3001/posts')
        .then(data => data.json())
        .then((data) => res.end(JSON.stringify(data)));
});

router.get("/posts/:id", (req, res) => {
    debugger;
    const postId = req.params.id;
    fetch(`http://localhost:3001/posts/${postId}`)
        .then(data => data.json())
        .then((post) => {
            res.json(post);
        });
});

module.exports = (app) => {
    app.use(router);
}