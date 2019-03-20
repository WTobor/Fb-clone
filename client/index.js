const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

require('dotenv').config({path: path.join(__dirname, './config/client.env')});

app.use(express.static(path.join(__dirname, './dist')));
app.use(morgan('dev'));
app.use(cors());

require('./web/routing/posts.router')(app);
require('./web/routing/secret-posts.router')(app);

app.listen(process.env.PORT, () => {
    console.log(`Server has started on port ${process.env.PORT}...`);
});
