module.exports = function(app) {

    var login = require('../controllers/login.js');
    
    app.get('/login', get.create);

}
