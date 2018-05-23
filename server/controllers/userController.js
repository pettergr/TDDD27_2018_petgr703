var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var userModel = require('../models/userModel.js');

module.exports = {

    register: function(req, res) {
        var newUser = new userModel(req.body);
        if (!req.body.password) {
            return res.status(400).send({
                message: "password missing"
            });
        }
        newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
        newUser.save(function(err, user) {
            if (err) {
                return res.status(400).send({
                    message: err
                });
            } else {
                user.hash_password = undefined;
                return res.json(user);
            }
        });
    },

    signIn: function(req, res) {
        userModel.findOne({
            email: req.body.email
        }, function(err, user) {
            if (err) throw err;
            if (!user || !user.comparePassword(req.body.password)) {
                return res.status(401).json({
                    message: 'Authentication failed. Invalid user or password.'
                });
            }
            return res.json({
                token: jwt.sign({
                    email: user.email,
                    name: user.name,
                    _id: user._id
                },  process.env.JWT_SECRET)
            });
        });
    },

    loginRequired: function(req, res, next) {
        if (req.user) {
            next();
        } else {
            return res.status(401).json({
                message: 'Unauthorized user!'
            });
        }
    }
};
