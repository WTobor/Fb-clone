const fetch = require('node-fetch');

async function authenticate(req, res, next) {
    var params = new URLSearchParams(req.body.params);
    const isAuthorized = await fetch('http://localhost:3002/login', {method: "POST", body: params});
    console.log(isAuthorized);
    if(!isAuthorized) {
        next();
    }
    else {
        res.json({status: 'error'});
    }
}

module.exports = { authenticate }