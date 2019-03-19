const express = require('express');
const fs = require('fs');
const cors = require('cors');
const chokidar = require('chokidar');

require('dotenv').config({path: './config/posts.env'});

const app = express();

function loadJSON(path) {
    return JSON.parse(fs.readFileSync(path).toString());
}

chokidar.watch('./fakes/*').on('all', () => {
    this.posts = loadJSON('./fakes/posts.json');
})

let posts = loadJSON('./fakes/posts.json');

app.use(cors());
app.get("/", (req, res) => res.end(JSON.stringify("hello posts")));
app.get("/posts", (req, res) =>{
    res.end(JSON.stringify(this.posts));
});

app.get("/posts/:id", (req, res) =>{
    const data = JSON.parse(fs.readFileSync('./fakes/posts.json').toString());
    const post = data.find((post) => post.id === postId);
    res.end(JSON.stringify(post));
});
app.get("*", (req, res) => res.end("error"));

app.listen(process.env.PORT, () => {
    console.log(`Server has started on port ${process.env.PORT}...`);
});