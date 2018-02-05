var Usuario = require('./models/user.js');
var jwt = require('jwt-simple');
var moment = require('moment');
var segredo = 'empresteiasuaapideemprestimo';

module.exports = function(req, res) {
  var email = req.body.email || '';
  var password = req.body.password || '';
  if (email == '' || password == '') {
    return res.send(401);
  }
  Usuario.findOne({email: email}, function (err, user) {
    if (err) {
      return res.end(401)
    }

    user.verificaSenha(password, function(isMatch) {
      if (!isMatch) {
        return res.send(401);
      }

    var expires = moment().add(7,'days').valueOf();
    
    var token = jwt.encode({
      iss: user.id,
      exp: expires
    }, segredo);

      return res.json({
        acess_token : token,
        expires: expires,
        user: user.toJSON()
      });
    });
  });
};