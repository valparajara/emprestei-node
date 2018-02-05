module.exports = function(app) {

    var users = require('../controllers/user.js');

    app.post('/users', users.create);

    app.put('/users/:userId', users.update);

    app.delete('/users/:userId', users.delete);
}
