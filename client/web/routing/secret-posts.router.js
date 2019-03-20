const fetch = require('node-fetch');
const express = require('express');

const router = express.Router();

router.post("/posts", (req, res) => {
    fetch('http://localhost:3001/secret/posts')
        .then(data => data.json())
        .then((data) => res.json(data));
});

router.post("/posts/:id", (req, res) => {
    const postId = req.params.id;
    fetch(`http://localhost:3001/secret/${postId}`)
        .then(data => data.json())
        .then((data) => res.json(data));
});

module.exports = (app) => {
    app.use('/secret', router);
}