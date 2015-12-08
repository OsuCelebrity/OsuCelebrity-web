'use strict';

/**
 * Module dependencies
 */
var config = require('./config');
var winston = require('./winston');
var Promise = require('Promise');

var current = require('../app/io_controllers/current.js');

module.exports = function(io) {
  var currentIo = io
    .on('connection', function(socket) {
      var spoof = false;

      var currentTimer = setInterval(function () {
        Promise.all([current.current(spoof), current.votes(spoof), current.queue(spoof)])
        .then(function(res) {
          socket.emit('current', res[0]);
          socket.emit('votes', res[1]);
          socket.emit('queue', res[2]);
        });
      }, config.socketInterval);

      socket.on('spoof', function() {
        spoof = !spoof;
      });

      socket.on('disconnect', function() {
        clearInterval(currentTimer);
      });
    });
}