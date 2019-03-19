function authenticate(req, res, next) {
    var params = new URLSearchParams(paramsString);
    const isAuthorized = await fetch('http://localhost:3002/login', {method: "POST", body: params});
    if(isAuthorized) {
        next();
    }
    else {
        res.json({status: 'error'});
    }
}

module.export = { authenticate }