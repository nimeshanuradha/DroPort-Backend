// THIS IS ROUTES FILE FOR DRONE RELATED ROUTES //
const request_routes = require('express').Router();
const dbcon = require('../dbconnection')

request_routes.get('/all', (req, res) => {

    console.log('in back end')

    dbcon.query("SELECT * FROM drone", (err, results) => {
		if (err) {
			console.log(err)
		}
		var result_data = []
		result_data = JSON.stringify(results)
		console.log(result_data)
        res.send(result_data)
    })

})


module.exports = request_routes