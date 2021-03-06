'use strict';

var express = require('express');
var router = express.Router();
var ensureAuthenticated = require('../config/ensureAuthenticated.js')
var User = require('../models/user.js')
// USERS

router.get('/me', ensureAuthenticated, function(req, res) {
  User.findById(req.user, function(err, user) {
    if (err) return res.status(400).send(err.message);
    res.status(200).send(user)
    console.log('found user: ',user);
  })
});

router.get( '/', ensureAuthenticated, function(req, res){
  User.find( {}, function(err, users){
    if (err) return res.status(400).send(err.message);
    res.status(200).send(users);
    console.log('got all users',users)
  })
})

module.exports = router;
