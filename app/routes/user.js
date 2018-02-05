module.exports = function(app) {

    var users = require('../controllers/user.js');

    app.post('/users', users.create);

    app.put('/users/:userId', users.update);

    app.delete('/users/:userId', users.delete);
}


// module.exports = {
//   getUsuarios: function(req, res){
//     res.json({message: "rota para GET do /usuarios"})
//   },
//   postUsuarios: function(req, res){
//     res.json({message: "rota para POST do /usuarios"})
//   }
// }

