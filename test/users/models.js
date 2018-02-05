'use strict';

var utils = require('../connect');
var should = require('should');
var User = require('../../models/user').User;


describe('Users: models', function () {


  describe('#create()', function () {
    it('should create a new User', function (done) {
      var user = {
        name: {
          email: 'foo@bar.com.br',
          password: '12345678'
        }
      };
      User.create(u, function (err, createdUser) {
        should.not.exist(err);
        createdUser.name.email.should.equal('foo@bar.com.br');
        createdUser.name.password.should.equal('12345678');
        done();
      });
    });
  });


});
