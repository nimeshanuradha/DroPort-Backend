// THIS IS ROUTES FILE FOR DRONE RELATED ROUTES //
const drone_routes = require('express').Router();
const dbcon = require('../dbconnection')

drone_routes.get('/all', (req, res) => {

    console.log('in back end')

    dbcon.query("SELECT * FROM drone WHERE (max_speed BETWEEN 20 AND (SELECT MAX(max_speed) FROM drone)) AND (max_flight_time BETWEEN 20 AND (SELECT MAX(max_flight_time) FROM drone)) AND (megapixels BETWEEN 20 AND (SELECT MAX(megapixels) FROM drone))", (err, results) => {
		if (err) {
			console.log(err)
		}
		var result_data = []
		result_data = JSON.stringify(results)
		console.log(result_data)
        res.send(result_data)
    })

});



// POST- New  drone registation
drone_routes.post('/new_drone', (req, res) => {
	console.log('data recieved to back end')

	var brand = req.body.brand
	var model = req.body.model
	var weight = req.body.weight
	var max_speed = req.body.max_speed
	var max_flight_time = req.body.max_flight_time
	var extra_battery = req.body.extra_battery
	var gps_positioning = req.body.gps_positioning
	var vision_system = req.body.vision_system
	var altitude_range = req.body.altitude_range
	var obstacle_sensing_range = req.body.obstacle_sensing_range
	var sensor = req.body.sensor
	var video_resolution = req.body.video_resolution
	var megapixels = req.body.megapixels
	var storage_type = req.body.storage_type
	var max_storage_capacity = req.body.max_storage_capacity
	var supported_os = req.body.supported_os
	var frequency = req.body.frequency
	var max_transmission = req.body.max_transmission
	var battery_capacity = req.body.battery_capacity
	var port = req.body.port
	
	
	// Updating drone table

	var drone_data = [brand, model, weight, max_speed, max_flight_time, extra_battery,gps_positioning, vision_system, altitude_range,obstacle_sensing_range,sensor,video_resolution,megapixels,storage_type,max_storage_capacity,supported_os,frequency,max_transmission,battery_capacity,port]
	console.log(drone_data)
	var sql1 = "INSERT INTO drone(brand, model, weight, max_speed, max_flight_time, extra_battery,gps_positioning, vision_system, altitude_range,obstacle_sensing_range,sensor,video_resolution,megapixels,storage_type,max_storage_capacity,supported_os,frequency,max_transmission,battery_capacity,port) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
	dbcon.query(sql1, drone_data, (err, result) => {
		if (err) {
			console.log("Error in query drone")
		} else {
			console.log("Number of records inserted to drone: " + result.affectedRows);
		}
	});

})



module.exports = drone_routes
