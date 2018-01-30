var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    email: String,
    password: String
});

// embeds_many :loans

module.exports = mongoose.model('User', UserSchema);
