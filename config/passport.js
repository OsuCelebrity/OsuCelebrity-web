'use strict';

var passport = require('passport');
var _ = require('lodash');
// These are different types of authentication strategies that can be used with Passport. 
var TwitchStrategy = require('passport-twitch').Strategy;
var config = require('./config');
var db = require('./sequelize');
var winston = require('./winston');

//Serialize sessions
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    db.User.find({where: {id: id}}).then(function(user){
        if(!user){
            winston.warn('Logged in user not in database, user possibly deleted post-login');
            return done(null, false);
        }
        winston.info('Session: { id: ' + user.id + ', username: ' + user.username + ' }');
        done(null, user);
    }).catch(function(err){
        done(err, null);
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

    db.User.find({where: {twitchUserId: profile.id}}).then(function(user) {
        if(!user){
            db.User.create({
                name: profile.displayName,
                username: profile.displayName.replace(/ /g, ''),
                twitchUserId: profile.id,
            }).then(function(u) {
                winston.info('New User (twitch) : { id: ' + u.id + ', username: ' + u.username + ' }');
                done(null, u);
            });
        } else {
            winston.info('Login (twitch) : { id: ' + user.id + ', username: ' + user.username + ' }');
            done(null, user);
        }
    }).catch(function(err){
        done(err, null);
    });
}));

module.exports = passport;