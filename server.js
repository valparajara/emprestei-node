var express     = require('express');
var bodyParser  = require('body-parser');
var dbConfig    = require('./config/database.js');
var mongoose    = require('mongoose');
var morgan      = require('morgan');
var passport	= require('passport');
var User        = require('./app/models/user'); // get the mongoose model
var jwt         = require('jwt-simple');

var app = express();

mongoose.connect(dbConfig.url, {
    useMongoClient: true
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

// log to console
app.use(morgan('dev'));
 
// Use the passport package in our application
app.use(passport.initialize());
 
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', function(req, res){
    res.json({"message": "Bem Vindo ao Emprestei 2.0"});
});

app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});	

