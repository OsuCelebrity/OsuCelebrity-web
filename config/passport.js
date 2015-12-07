'use strict';

var passport = require('passport');
var _ = require('lodash');
var config = require('./config');
var winston = require('./winston');

var TwitchUser = require('../app/models/TwitchUser');

var TwitchStrategy = require('passport-twitch').Strategy;

//Serialize sessions
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    TwitchUser.findOne({id: id}).exec(function(err, user){
        if(err) {
            return done(err, null);
        }

        if(!user){
            winston.warn('Logged in user not in database, user possibly deleted post-login');
            return done(null, false);
        }
        winston.info('Session: { id: ' + user.id + ', username: ' + user.username + ' }');
        done(null, user);
    });
});

//Use twitch strategy
passport.use(new TwitchStrategy({
        clientID: config.twitch.clientID,
        clientSecret: config.twitch.clientSecret,
        callbackURL: config.twitch.callbackURL,
        scope: "user_read"
    },
    function(accessToken, refreshToken, profile, done) {

    TwitchUser.findOne({id: profile.id}).exec(function(err, user) {
        if(err) {
            winston.debug(err);
            return done(err, null);
        }

        winston.debug(profile);
        if(!user){
            TwitchUser.create({
                id: profile.id,
                name: profile.displayName,
                username: profile.username,
            }, function(err, u) {
                if(err) {
                    return done(err, null);
                }
                
                winston.info('New User (twitch) : { id: ' + u.id + ', username: ' + u.username + ' }');
                done(null, u);
            });
        } else {
            winston.info('Login (twitch) : { id: ' + user.id + ', username: ' + user.username + ' }');
            done(null, user);
        }
    });
}));

module.exports = passport;