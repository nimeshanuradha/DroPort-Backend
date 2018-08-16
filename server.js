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



// #########################################################################

// NEW AUTH TEST
var flash = require('connect-flash');
var crypto = require('crypto');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var dbcon = require('./dbconnection');
var sess = require('express-session');
var Store = require('express-session').Store;
var BetterMemoryStore = require('session-memory-store')(sess);


var store = new BetterMemoryStore({ expires: 60 * 60 * 1000, debug: true });
app.use(sess({
    name: 'JSESSION',
    secret: 'MYSECRETISVERYSECRET',
    store: store,
    resave: true,
    saveUninitialized: true
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


// route file 
passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true //passback entire req to call back
},
    function (req, username, password, done) {
        if (!username || !password) {
            return done(null, false, req.flash('message', 'All fields are required.'));
        }
        var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';

        dbcon.query("select * from customer where username = ?", [username], function (err, rows) {
            console.log(err); console.log(rows);

            if (err) return done(req.flash('message', err));

            if (!rows.length) {
                return done(null, false, req.flash('message', 'Invalid username or password.'));
            }

            // salt = salt + '' + password;
            // var encPassword = crypto.createHash('sha1').update(salt).digest('hex');
            var dbPassword = rows[0].password;
            if (!(dbPassword == password)) {
                return done(null, false, req.flash('message', 'Invalid username or password.'));
            }
            return done(null, rows[0]);
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    connection.query("select * from customer where id =?",id, function (err, rows) {
        console.log(rows);
        
        done(err, rows[0]);
    });
});


app.get('/login', function (req, res) {
    console.log("in get");
    
    res.render('/admin_main_panel', { 'message': req.flash('message') });
});

app.post("/login", passport.authenticate('local', {
    
    successRedirect: 'http://localhost:4200/own_reg',
    failureRedirect: 'http://localhost:4200/admin_main_panel',
    failureFlash: true
}), function (req, res, info) {
    console.log("in post")
    res.render('/asd', { 'message': req.flash('message') });
   

});














// ##############################################################################################



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