'use strict'

const app = express();
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jwt-simple');
const validaJWT = require('./app/util/validajwt.js');

const db = require('./config/database.js');//coloque a url do db aqui

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
mongoose.connect(db);
  
app.use('/', router);
router.use('/login', login);

const routes = require('./app/routes')
  router.route('/user')
    .post(validaJWT, routes.create);
    .put(validaJWT, routes.update);
    .delete(validaJWT, routes.delete);
  router.route('/login')
    .post(routes.login);

app.listen(port);
console.log('conectado a porta ' + port);