'use strict';

/**
* Module dependencies.
*/
var passport = require('passport');

module.exports = function(app) {
// User Routes
var users = require('../controllers/users');

// User Routes
app.get('/signout', users.signout);

// Setting the twitch oauth routes
app.get('/auth/twitch', passport.authenticate('twitch'));

app.get('/auth/twitch/callback', passport.authenticate('twitch', {
    failureRedirect: '/'
}), users.authCallback);

// Finish with setting up the userId param
app.param('userId', users.user);
};

