const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

require('dotenv').config({path: './config/auth.env'});

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

require('./web/routing/router')(app);

app.listen(process.env.PORT, () => {
    console.log(`Server has started on port ${process.env.PORT}...`);
});