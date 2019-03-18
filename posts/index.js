const express = require('express');

const app = express();
app.get("/", (req, res) => res.end(JSON.stringify("hello")));
app.get("/posts", (req, res) => res.end(JSON.stringify("world")));
app.get("*", (req, res) => res.end("error"));

const port = 3000;
app.listen(port, () => {
    console.log(`Server has started on port ${port}...`);
});