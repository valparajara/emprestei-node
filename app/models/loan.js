var mongoose = require('mongoose');

var LoanSchema = mongoose.Schema({
    friend_email: String,
    friend_name: String,
    loaned_item: String,
    notification: Integer, default:2,
    returned: Boolean,
    returned_at: Date

    // embebed user

});

module.exports = mongoose.model('Loan', LoanSchema);
