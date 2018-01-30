var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: String,
    content: String
});

module.exports = mongoose.model('User', UserSchema);
