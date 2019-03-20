const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

require('dotenv').config({path: path.join(__dirname, './config/posts.env')});

const app = express();

app.use(morgan('dev'));
app.use(cors());

require('./web/routing/root.router')(app);
require('./web/routing/secret.router')(app);

app.listen(process.env.PORT, () => {
    console.log(`Server has started on port ${process.env.PORT}...`);
});