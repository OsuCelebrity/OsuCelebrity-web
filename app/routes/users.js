'use strict';

/**
* Module dependencies.
*/
var passport = require('passport');

module.exports = function(app) {
// User Routes
var users = require('../../app/controllers/users');

// User Routes
app.get('/signin', users.signin);
app.get('/signup', users.signup);
app.get('/signout', users.signout);
app.get('/users/me', users.me);

// Setting up the users api
app.post('/users', users.create);

// Setting the twitch oauth routes
app.get('/auth/twitch', passport.authenticate('twitch'));

app.get('/auth/twitch/callback', passport.authenticate('twitch', {
    failureRedirect: '/signin'
}), users.authCallback);

// Finish with setting up the userId param
app.param('userId', users.user);
};

