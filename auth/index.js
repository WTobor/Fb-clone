const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

require('dotenv').config({path: './config/auth.env'});

const app = express();

function loadJSON(path) {
    return JSON.parse(fs.readFileSync(path).toString());
}

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => res.end(JSON.stringify("hello auth")));

app.post("/login", (req, res) =>{
    if(!req.body) return res.sendStatus(400);

    let users = loadJSON('./fakes/users.json');
    const user = users.find((user) => user.login == req.body.login && user.password === req.body.password);
    if (user) {
        res.send(JSON.stringify(`welcome ${req.body.login}`));
    }
    else {
        res.send(JSON.stringify(`login failed`));
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server has started on port ${process.env.PORT}...`);
});