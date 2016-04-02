// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var http = require('http');
//below line exports db object from db js file.
//var customers = require('./db/Customers');
// create a new user called chris and save to db
//var todo = new usrTodos({
//    name: 'Chris',
//    username: 'sevilayha',
//    message: 'Dentist appointment.',
//    status: true,
//    created_at: '10-27-2015',
//    execute_at: '10-28-2015',
//    mobile: '8848929420',
//    email: 'shrikaantbhardwaj@gmai.com'
//});
//var orders = require('./db/Orders');
//var products = require('./db/Products');
//// call the built-in save method to save to the database
//todo.save(function (err) {
//    if (err) throw err;

//    console.log('Todo Msg saved successfully..');
//});

//ends database saving

	
// config files-these below 3 lines are not used but works correct. these have been replaced with above line of code
//var db = require('./config/db');
//if (db == null)
//    console.log('./config');

// configuration ===========================================
var port = process.env.PORT || 8080; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
console.log("path-" + __dirname);
// routes ==================================================
require('./app/routes')(app); // pass our application into our routes
//the above line is alternate to below code block
//app.get('*', function (req, res) {
//    res.sendfile('./public/index.html');
//});

var router = express.Router();
//router.get('/', function (req, res) {
//    // below command is to find all users
//    usrTodos.find({}, function (err, todos) {
//        if (err) throw err;

//        // object of all the users
//        console.log(todos);
//        res.json(todos);
//    });
//});

//save new record
// create todo and send back all todos after creation
//app.post('/api/todos', function (req, res) {

//    // create a todo, information comes from AJAX request from Angular
//    usrTodos.create({
//        name: 'suchi',
//        username: 'vandanatyagi',
//        message: req.body.text,
//        status: true,
//        created_at: '10-28-2015',
//        execute_at: '10-29-2015',
//        mobile: '8848929420',
//        email: 'tyagi.vandana@gmai.com'
//    }, function (err, todos) {
//        if (err)
//            res.send(err);

//        // get and return all the todos after you create another
//        usrTodos.find(function (err, todos) {
//            if (err)
//                res.send(err)
//            res.json(todos);
//        });
//    });

//});
//end

// fetch specific user todos
//router.get('/api/todos/:user', function (req, res) {
//    console.log("test");
//    // below command is to find all users
//    usrTodos.find({'user' : 'suchi'}, function (err, todos) {
//        if (err) throw err;

//        // object of all the users
//        console.log(todos);
//        res.json(todos);
//    });
//});
//end



app.use('/api', router);

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app
