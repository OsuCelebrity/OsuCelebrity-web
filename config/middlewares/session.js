'use strict';

var session = require('express-session'),
    config = require('./../config'),
    SequelizeStore = require('connect-session-sequelize')(session.Store);

module.exports = function(sequelize) {
  var sessionMiddleware = session({
    resave: true,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    }),
    cookie:{maxAge:1000*3600*24*7}, //remember for 7 days
    secret: config.expressSessionSecret/*||'$uper$ecret$e$$ionKey'*/
  });

  return sessionMiddleware;
}