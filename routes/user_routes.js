// THIS IS ROUTES FILE FOR USER RELATED ROUTES //

const user_routes = require('express').Router();
const dbcon = require('../dbconnection');
var passport = require('passport');

// GET All Customers
user_routes.get('/cus', (req, res) => {
    console.log('user_routes called')
    dbcon.query("SELECT * FROM customer", (err, results) => {
        if (err) {
            console.log(err)
        }
        var all_cus_arr = []
        all_cus_arr = JSON.stringify(results)
        console.log(all_cus_arr)
        res.send(all_cus_arr)

    })
})

// GET Customer by ID
user_routes.get('/cus/:id', (req, res) => {
    console.log('user_routes called')
    var id = req.body.id
    dbcon.query("SELECT * FROM customer WHERE cus_id=?", id, (err, results) => {
        if (err) {
            console.log(err)
        }
        var user_data_arr = []
        user_data_arr = JSON.stringify(results)
        //console.log(user_data_arr)
        res.send(user_data_arr)

    })
})

// GET All Pilots
user_routes.get('/pil', (req, res) => {
    console.log('user_routes called')
    dbcon.query("SELECT * FROM drone_pilot", (err, results) => {
        if (err) {
            console.log(err)
        }
        var all_pil_arr = []
        all_pil_arr = JSON.stringify(results)
        console.log(all_pil_arr)
        res.send(all_pil_arr)

    })
})

// GET Pilot by ID
user_routes.get('/pil/:id', (req, res) => {
    console.log('user_routes called')
    var id = req.body.id
    dbcon.query('SELECT * FROM drone_pilot WHERE pil_id=?', id, (err, results) => {
        if (err) {
            console.log(err)
        }
        var user_data_arr = []
        user_data_arr = JSON.stringify(results)
        console.log(user_data_arr)
        res.send(user_data_arr)

    })
})

// GET All Owners
user_routes.get('/own', (req, res) => {
    console.log('user_routes called')
    dbcon.query("SELECT * FROM drone_owner", (err, results) => {
        if (err) {
            console.log(err)
        }
        var all_own_arr = []
        all_own_arr = JSON.stringify(results)
        console.log(all_own_arr)
        res.send(all_own_arr)

    })
})

// GET Owner by ID
user_routes.get('/own/:id', (req, res) => {
    console.log('user_routes called')
    var id = req.body.id
    dbcon.query("SELECT * FROM drone_owner WHERE own_id=?", id, (err, results) => {
        if (err) {
            console.log(err)
        }
        var user_data_arr = []
        user_data_arr = JSON.stringify(results)
        //console.log(user_data_arr)
        res.send(user_data_arr)

    })
})

// GET All Admins
user_routes.get('/admin', (req, res) => {
    console.log('user_routes called')
    dbcon.query("SELECT * FROM admin", (err, results) => {
        if (err) {
            console.log(err)
        }
        var restricted_area = []
        restricted_area = JSON.stringify(results)
        console.log(restricted_area)
        res.send(restricted_area)

    })
})

// GET Admin by ID
user_routes.get('/admin/:id', (req, res) => {
    console.log('user_routes called')
    var id = req.body.id
    dbcon.query("SELECT * FROM admin WHERE adm_id=?", id, (err, results) => {
        if (err) {
            console.log(err)
        }
        var user_data_arr = []
        user_data_arr = JSON.stringify(results)
        //console.log(user_data_arr)
        res.send(user_data_arr)

    })
})

// POST New Pilot
user_routes.post('/pil/new', (req, res) => {
    var fname = req.body.firstname
    var lname = req.body.lastname
    var dob = req.body.dob
    var age = req.body.age
    var sex = req.body.sex
    var nic = req.body.nic
    var mobile_no = req.body.mobile_no
    var fixed_no = req.body.fixed_no
    var email = req.body.email
    var fb_link = req.body.fb_link
    var username = req.body.username
    var password = req.body.password
    var user_type = "pilot";

    console.log(fname)

    var data_arr = [username, password, fname, lname, dob, age, sex, nic, mobile_no, fixed_no, email, fb_link]
    var sql1 = "INSERT INTO drone_pilot(username ,password ,f_name ,l_name ,dob ,age ,sex ,nic ,mobile_no ,fixed_no ,email ,fb_link) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)"
    // var sql2 = "SELECT LAST_INSERT_ID() as user_id"
    dbcon.query(sql1, data_arr, function (err, results) {
        if (err) throw err;

        dbcon.query('SELECT LAST_INSERT_ID() as user_id', function (err, results) {
            if (err) throw err;
            const user_id = results[0];
            console.log(user_id);
            // req.login(user_id, function(err){
            //     res.redirect('pil_main_page')
            // res.send(" get user id ok");
            // });
            res.json({
                id: user_id
            });


        });
    }

    )

});

// POST New customer
user_routes.post('/cus/new', (req, res) => {
    var f_name = req.body.fname
    var l_name = req.body.lname
    var dob = req.body.dob
    var age = req.body.age
    var sex = req.body.sex
    var nic = req.body.nic
    var mobile_no = req.body.mobile_no
    var fixed_no = req.body.fixed_no
    var email = req.body.email
    var fb_link = req.body.fb_link
    var username = req.body.username
    var password = req.body.password
    var user_type = "customer";


    var data_arr_1 = [f_name, l_name, dob, nic, age, mobile_no, fixed_no, sex, email, fb_link, username, password,]
    var sql1 = "INSERT INTO customer(f_name,l_name,dob,nic,age,phone_mobile,phone_fix,gender,email,fb_profile_link,username,password) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)"
    // var sql2 = "SELECT LAST_INSERT_ID() as user_id"
    dbcon.query(sql1, data_arr_1, function (err, results) {
        if (err) {
            console.log(err);
        }

        // dbcon.query('SELECT LAST_INSERT_ID() as user_id', function (err, results) {
        //     if (err) throw err;
        //     let user_id = results[0];
        // });
        // console.log(user_id);
    })
    var data_arr_2 = [username, password, user_type, f_name, l_name]
    var sql2 = "INSERT INTO user_credentials(username,password,user_type,f_name,l_name) VALUES(?,?,?,?,?)"
    dbcon.query(sql2, data_arr_2, function (err, results) {
        if (err) {
            console.log(err);
        } else {
            res.send({ message: "successfilly registered" })
        }
    })



});




// POST New owner
user_routes.post('/own/new', (req, res) => {

    var f_name = req.body.fname
    var l_name = req.body.lname
    var dob = req.body.dob
    var age = req.body.age
    var sex = req.body.sex
    var nic = req.body.nic
    var mobile_no = req.body.mobile_no
    var fixed_no = req.body.fixed_no
    var email = req.body.email
    var fb_link = req.body.fb_link
    var username = req.body.username
    var password = req.body.password
    var user_type = "owner";
    var drn_id = null
    var no_of_drones = 0
    var rating = 0
    var review = " "


    var data_arr_1 = [f_name, l_name, dob, nic, age, mobile_no, fixed_no, sex, email, fb_link, username, password, drn_id, no_of_drones, review]
    var sql1 = "INSERT INTO drone_owner(fname,lname,dob,nic,age,phone_mobile,phone_fix,gender,email,fb_profile_link,username,password,drn_id,no_of_drones,review) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    // var sql2 = "SELECT LAST_INSERT_ID() as user_id"
    dbcon.query(sql1, data_arr_1, function (err, results) {
        if (err) {
            console.log(err);
        }

        // dbcon.query('SELECT LAST_INSERT_ID() as user_id', function (err, results) {
        //     if (err) throw err;
        //     let user_id = results[0];
        // });
        // console.log(user_id);
    })
    var data_arr_2 = [username, password, user_type, f_name, l_name]
    var sql2 = "INSERT INTO user_credentials(username,password,user_type,f_name,l_name) VALUES(?,?,?,?,?)"
    dbcon.query(sql2, data_arr_2, function (err, results) {
        if (err) {
            console.log(err);
        } else {
            res.send({ message: "successfilly registered" })
        }
    })

});




user_routes.post('/new_area', (req, res) => {
    console.log('data recieved to back end')

    var location = req.body.location

    var area_data = [location]
    console.log(area_data)

    var sql3 = "INSERT INTO restricted_areas(location) VALUES(?)"
    dbcon.query(sql3, area_data, function (err, results) {
        if (err) {
            console.log(err);
        } else {
            res.send({ message: "successfilly added" })
        }
    })

});



// user_routes.get('/pil', (req, res) => {
//     console.log('user_routes called')
//     dbcon.query("SELECT * FROM restricted_areas", (err, results) => {
//         if (err) {
//             console.log(err)
//         }
//         var all_pil_arr = []
//         all_pil_arr = JSON.stringify(results)
//         console.log(all_pil_arr)
//         res.send(all_pil_arr)

//     })
// })


user_routes.get('/getArea', (req, res) => {
    console.log('user_routes called')
    dbcon.query("SELECT * FROM restricted_areas", (err, results) => {
        if (err) {
            console.log(err)
        }
        var restricted_area = []
        restricted_area = JSON.stringify(results)
        console.log(restricted_area)
        res.send(restricted_area)

    })
})






module.exports = user_routes;
