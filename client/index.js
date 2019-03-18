const express = require('express');

const app = express();

const posts = [
    {body: 'post number 1'},
    {body: 'post number 2'},
    {body: 'post number 3'},
];

app.get("/", (req, res) => res.end(JSON.stringify("hello")));
app.get("/posts", (req, res) => res.end(JSON.stringify(posts)));
app.get("*", (req, res) => res.end("error"));

const port = 3000;
app.listen(port, () => {
    console.log(`Server has started on port ${port}...`);
});