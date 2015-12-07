'use strict';

var session = require('express-session'),
    config = require('./../config'),
    MongoStore = require('connect-mongo')(session);

module.exports = function(mongoose) {
  var sessionMiddleware = session({
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie:{maxAge:1000*3600*24*7}, //remember for 7 days
    secret: config.expressSessionSecret
  });

  return sessionMiddleware;
}