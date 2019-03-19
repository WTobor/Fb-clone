const express = require('express');
const fs = require('fs');
const cors = require('cors');
const chokidar = require('chokidar');

require('dotenv').config({path: './config/posts.env'});

const app = express();

app.use(cors());

require('./web/routing/router')(app);

app.listen(process.env.PORT, () => {
    console.log(`Server has started on port ${process.env.PORT}...`);
});