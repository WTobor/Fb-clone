const fetch = require('node-fetch');
const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    return login()
        .then((data) => res.end(JSON.stringify(`hello client - ${data}`)));
});

router.get("/posts", (req, res) => {
    return fetch('http://localhost:3001/posts')
        .then(data => data.json())
        .then((data) => res.end(JSON.stringify(data)));
});


const login = async () => {
    console.log("login");
    const data = {login: "aaa", password: "paaa"};
    var user = new URLSearchParams(data);

    const result = await fetch('http://localhost:3002/login', {method: "POST", body: user});
    return result.json();
};

router.get("/posts/:id", (req, res) => {
    const postId = req.params.id;
    const post = posts.find((post) => post.id === postId);
    return res.end(JSON.stringify(post));
});

router.get("*", (req, res) => res.end("error"));

module.exports = (app) => {
    app.use(router);
}