var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
  email:
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  access_token: {
  	type: String
  }
});

UserSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.verificaSenha = function(password, next) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return next(err);
    next(isMatch);
  });
};

// embeds_many :loans

module.exports = mongoose.model('User', UserSchema);
