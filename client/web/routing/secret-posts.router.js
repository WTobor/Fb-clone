const fetch = require('node-fetch');
const express = require('express');

const router = express.Router();

router.get("/posts", (req, res) => {
    fetch('http://localhost:3001/secret')
        .then(data => data.json())
        .then((data) => res.json(data));
});

router.get("/posts/:id", (req, res) => {
    const postId = req.params.id;
    fetch(`http://localhost:3001/secret/${postId}`)
        .then(data => data.json())
        .then((data) => res.json(data));
});

router.get("*", (req, res) => res.end("error"));

module.exports = (app) => {
    app.use('/secret', router);
}