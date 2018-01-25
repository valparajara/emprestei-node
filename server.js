'use strict';


var app = require('./app');
var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log('Aplicação rodando na porta ' + port);
});