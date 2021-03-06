var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var validaJWT = require('./app/util/validajwt.js');

var db = require('./config/database.js');//coloque a url do db aqui

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;
var router = express.Router();
  
app.use('/', router);
router.use('/login', login);

var routes = require('./app/routes')
  router.route('/user')
    .post(validaJWT, routes.create);
    .put(validaJWT, routes.update);
    .delete(validaJWT, routes.delete);
  router.route('/login')
    .post(routes.login);

mongoose.connect(db);

app.listen(port);
console.log('conectado a porta ' + port);