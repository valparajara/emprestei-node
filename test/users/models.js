'use strict';

var utils = require('../connect');
var should = require('should');
var User = require('../../models/user').User;


describe('Users: models', function () {


  describe('#create()', function () {
    it('should create a new User', function (done) {
      var u = {
        name: {
          email: 'foo@bar.com.br',
          password: '12345678'
        }
      };
      User.create(u, function (err, createdUser) {
        should.not.exist(err);
        createdUser.name.givenName.should.equal('foo@bar.com.br');
        createdUser.name.familyName.should.equal('12345678');
        done();
      });
    });
  });


});
