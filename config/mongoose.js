'use strict';

var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var _ = require('lodash');
var config = require('./config');
var winston = require('./winston');

winston.info('Initializing Mongoose...');

mongoose.connect(config.db);

/*// loop through all files in models directory ignoring hidden files and this file
fs.readdirSync(config.modelsDir)
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js')
    })
    // import model files and save model names
    .forEach(function (file) {
        winston.info('Loading model file ' + file);
        require(path.join(config.modelsDir, file));
    });*/

module.exports = mongoose;