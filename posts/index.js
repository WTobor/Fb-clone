const express = require('express');
const cors = require('cors');

require('dotenv').config({path: './config/posts.env'});

const app = express();

app.use(cors());

require('./web/routing/root.router')(app);
require('./web/routing/secret.router')(app);

app.listen(process.env.PORT, () => {
    console.log(`Server has started on port ${process.env.PORT}...`);
});