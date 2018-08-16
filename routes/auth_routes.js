// THIS IS ROUTES FILE FOR AUTHENTIVATION RELATED ROUTES //

const auth_routes = require('express').Router();
const dbcon = require('../dbconnection')

auth_routes.post('/reg', (req, res) => {
    console.log(req.body);
    

})


module.exports = auth_routes