const express = require('express');
const fs = require('fs');
const crypto = require('crypto');

const router = express.Router();

const salt =  '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824';

function encode(text) {
    return crypto.createHmac('sha256', salt)
    .update(text)
    .digest('hex');
}

function loadJSON(path) {
    return JSON.parse(fs.readFileSync(path).toString());
}

router.get("/", (req, res) => res.end(JSON.stringify("hello auth")));

router.post("/login", (req, res) =>{
    if(!req.body) return res.sendStatus(400);

    let users = loadJSON('./fakes/users.json');
    const user = users.find((user) => user.login == req.body.login && user.password === encode(req.body.password));
    if (user) {
        res.send(JSON.stringify(`welcome ${req.body.login}`));
    }
    else {
        res.send(JSON.stringify(`login failed`));
    }
});

module.exports = (app) => {
    app.use(router);
}