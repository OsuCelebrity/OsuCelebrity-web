'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');
var request = require('request');
var promise = require('promise');

var config = require('../../config/config');
var db = require('../../config/sequelize');
var winston = require('../../config/winston');

var getCelebrityApi = function(path) {
  var options = {
    url: config.osucelebrity.apiUrl + path,
    headers: {
      'Accept': 'application/json'
    }
  };

  return new promise(function(resolve, reject) {
    request(options, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        resolve(JSON.parse(body));
      }
      resolve({});
    });
  });
};

var getCurrentInfo = function() {
  //Only load the data if using production
  if(config.osucelebrity.useApi === false) {
    return {
      accuracy: 99.26639556884766,
      beatmap: "SMiLE.dk - Golden Sky [Insane]",
      country: "RO",
      gameMode: 0,
      health: 0,
      id: 3219026,
      level: 100.792,
      name: "Rohulk",
      playCount: 18020,
      playingFor: "0:53",
      pp: 8020.01,
      queueSize: 0,
      rank: 73,
      source: "queue"
    };
  }

  return getCelebrityApi('/current');
};

var getCurrentQueue = function() {
  if(config.osucelebrity.useApi === false) {
    return [
      {
        name: "Mercurius",
        timeInQueue: "0:26",
        votes: "1"
      },
      {
        name: "Cerkie",
        timeInQueue: "0:02",
        votes: "1"
      }
    ];
  }

  return getCelebrityApi('/queue');
};

var getCurrentVotes = function() {
  if(config.osucelebrity.useApi === false) {
    return [
      {
        queueUser: "5863",
        twitchUser: "redbackthomson",
        voteTime: "1448767421000",
        voteType: "UP"
      },
      {
        queueUser: "5863",
        twitchUser: "karlchance17",
        voteTime: "1448767411576",
        voteType: "DOWN"
      },
      {
        queueUser: "5863",
        twitchUser: "grumd",
        voteTime: "1448767401207",
        voteType: "DOWN"
      },
      {
        queueUser: "5863",
        twitchUser: "umi_sama",
        voteTime: "1448767391509",
        voteType: "DOWN"
      }
    ];
  }

  return getCelebrityApi('/votes');
};

/**
 * Gets the information about the current spectatee's votes
 */
exports.votes = function(req, res, next) {
  getCurrentVotes().then(function(current) {
    res.jsonp(current);
  });
};

/**
 * Gets the information about the current spectatee and the queue
 */
exports.current = function(req, res, next) {
  getCurrentInfo().then(function(current) {
    res.jsonp(current);
  });
};

/**
 * Gets the information about the current queue
 */
exports.queue = function(req, res, next) {
  getCurrentQueue().then(function(current) {
    res.jsonp(current);
  });
};