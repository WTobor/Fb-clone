const cors = require('cors');
const express = require('express');

const app = express();

require('dotenv').config({path: './config/client.env'});

app.use(cors());

require('./web/routing/router')(app);

app.listen(process.env.PORT, () => {
    console.log(`Server has started on port ${process.env.PORT}...`);
});
