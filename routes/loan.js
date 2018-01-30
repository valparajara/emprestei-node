module.exports = function(app) {

    var loans = require('../controllers/loan.js');

    app.post('/loans', loans.create);

    app.get('/loans', loans.findAll);

    app.get('/loans/:loanId', loans.findOne);

    app.put('/loans/:loanId', loans.update);

    app.delete('/loans/:loanId', loans.delete);
}
