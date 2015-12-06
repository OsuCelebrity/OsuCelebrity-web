'use strict';

/**
 * Module dependencies.
 */
var express     = require('express');
var fs          = require('fs');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load Configurations
var config          = require('./config/config');
var winston         = require('./config/winston');

winston.info('Starting '+config.app.name+'...');
winston.info('Config loaded: '+config.NODE_ENV);

var db              = require('./config/sequelize');
var passport        = require('./config/passport');

var app = express();

var server          = require('http').Server(app);
var io              = require('socket.io')(server);

//Initialize Express
require('./config/express')(app, passport, db.sequelize);
require('./config/io')(io);

//Start the app by listening on <port>
server.listen(config.PORT);
winston.info('Express app started on port ' + config.PORT);

//expose app
exports = module.exports = app;
