var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
  

var db = require('./config/database.js');//coloque a url do db aqui

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();
  
app.use('/', router);

var routes = require('./app/routes')
  router.route('/users')
    .get(routes.getUsuarios)
    .post(routes.postUsuarios);
  router.route('/login')
    .post(routes.login);

mongoose.connect(db);

app.listen(port);
console.log('conectado a porta ' + port);