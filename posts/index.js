const express = require('express');
const fs = require('fs');
const cors = require('cors');
const chokidar = require('chokidar');

const app = express();

function loadJSON(path) {
    return JSON.parse(fs.readFileSync(path).toString());
}

chokidar.watch('./fakes/*').on('all', () => {
    this.posts = loadJSON('./fakes/posts.json');
})

let posts = loadJSON('./fakes/posts.json');

app.use(cors());
app.get("/", (req, res) => res.end(JSON.stringify("hello")));
app.get("/posts", (req, res) =>{
    res.end(JSON.stringify(this.posts));
});

app.get("/posts/:id", (req, res) =>{
    const data = JSON.parse(fs.readFileSync('./fakes/posts.json').toString());
    const post = data.find((post) => post.id === postId);
    res.end(JSON.stringify(post));
});
app.get("*", (req, res) => res.end("error"));

const port = 3001;
app.listen(port, () => {
    console.log(`Server has started on port ${port}...`);
});