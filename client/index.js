const express = require('express');
const cors = require('cors');
const app = express();
const fetch = require('node-fetch');
require('dotenv').config({path: './config/client.env'});

app.use(cors());
app.get("/", (req, res) => res.end(JSON.stringify("hello")));
app.get("/posts", (req, res) => {
    return fetch('http://localhost:3001/posts')
    .then(data => data.json())
    .then((data) => res.end(JSON.stringify(data)))

});
app.get("/posts/:id", (req, res) => {
    const postId = req.params.id;
    const post = posts.find((post) => post.id === postId);
    return res.end(JSON.stringify(post));
});
app.get("*", (req, res) => res.end("error"));

app.listen(process.env.PORT, () => {
    console.log(`Server has started on port ${process.env.PORT}...`);
});