// THIS IS ROUTES FILE FOR AUTHENTIVATION RELATED ROUTES //

const auth_routes = require('express').Router();
const dbcon = require('../dbconnection')

auth_routes.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password

    var results = dbcon.query("select * from user_credentials where username = ?", username, function (err, rows) {
        // console.log(err); console.log(rows[0]);
        if (err) {
            res.send({ success: false, message: "Logging error" })
        }

        if (!rows.length) {
            res.send({ success: false, message: " username or password required." })
        }

        // salt = salt + '' + password;
        // var encPassword = crypto.createHash('sha1').update(salt).digest('hex');
        var dbPassword = rows[0].password;

        if (!(dbPassword == password)) {
            res.send({ success: false, message: "Invalid username or password.Please try again" })
        } else {
            res.send({ success: true, message: "Successfully Logged in", user: { username: rows[0].username, f_name: rows[0].f_name, l_name: rows[0].l_name, user_type: rows[0].user_type } })
        }
    }
    );

    console.log(results);
    

})


module.exports = auth_routes