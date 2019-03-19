const express = require('express');
const cors = require('cors');
const app = express();

const posts = [
    {id: 'aaa', body: 'post number 1'},
    {id: 'bbb', body: 'post number 2'},
    {id: 'ccc', body: 'post number 3'},
];

app.use(cors());
app.get("/", (req, res) => res.end(JSON.stringify("hello")));
app.get("/posts", (req, res) => res.end(JSON.stringify(posts)));
app.get("/posts/:id", (req, res) => {
    const postId = req.params.id;
    const post = posts.find((post) => post.id === postId);
    return res.end(JSON.stringify(post));
});
app.get("*", (req, res) => res.end("error"));

const port = 3000;
app.listen(port, () => {
    console.log(`Server has started on port ${port}...`);
});