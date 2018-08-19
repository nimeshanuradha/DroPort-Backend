// THIS IS SERVER FILE FOR DROPORT BACKEND //



// initializing
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var cookieParser = require('cookie-parser');

app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));



// authentication packages
// var session = require('express-session'); 
// var passport = require('passport');
// app.use(cookieParser()); 
// app.use(session({
//     secret: 'thesecret',            //ok
//     resave: false,
//     saveUninitialized: false,
//     // cookie: { secure: true }
// }));

// app.use(passport.initialize());
// app.use(passport.session());




var request_routes = require('./routes/request_routes');
var user_routes = require('./routes/user_routes');
var drone_routes = require('./routes/drone_routes');
var auth_routes = require('./routes/auth_routes');



app.use('/api/req', request_routes);
app.use('/api/user', user_routes);
app.use('/api/drn', drone_routes);
//app.use('/api/auth', auth_routes);


port = 3000;
app.listen(port, (err) => {
    if (err) {
        console.log("server error")
    } else {
        console.log('Listning on PORT :', port)
    }

})