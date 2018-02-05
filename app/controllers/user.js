var User = require('../models/user.js');

exports.create = function(req, res) {

    if(!req.body.content) {
        res.status(400).send({message: "User can not be empty"});
    }
    var user = new User({email: req.body.email, password: req.body.password || "Untitled User", content: req.body.content});

    user.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the User."});
        } else {
            res.send(data);
        }
    });

};

exports.update = function(req, res) {

    User.findById(req.params.userId, function(err, user) {
        if(err) {
            res.status(500).send({message: "Could not find a user with id " + req.params.userId});
        }

        user.email = req.body.email;

        user.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update user with id " + req.params.userId});
            } else {
                res.send(data); 
            }
        });
    });

};

exports.delete = function(req, res) {

    User.remove({_id: req.params.userId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete user with id " + req.params.id});
        } else {
            res.send({message: "User deleted successfully!"})
        }
    });

};
