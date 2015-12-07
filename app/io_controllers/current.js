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

var NodeCache = require('node-cache');
var cache = new NodeCache({ stdTTL: config.socketInterval/1000 });

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
    return new promise(function(resolve, reject) {
      resolve({
        accuracy: 99.26639556884766,
        beatmap: "SMiLE.dk - Golden Sky [Insane]",
        country: "RO",
        gameMode: 0,
        health: 0.7,
        id: 3219026,
        level: 100.792,
        name: "Rohulk",
        playCount: 18020,
        playingFor: "0:53",
        pp: 8020.01,
        queueSize: 2,
        rank: 73,
        source: "queue"
      });
    });
  }

  return getCelebrityApi('/current');
};

var getCurrentQueue = function() {
  if(config.osucelebrity.useApi === false) {
    return new promise(function(resolve, reject) {
      resolve([
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
      ]);
    });
  }

  return getCelebrityApi('/queue');
};

var getCurrentVotes = function() {
  if(config.osucelebrity.useApi === false) {
    return new promise(function(resolve, reject) {
      resolve([
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
      ]);
    });
  }

  return getCelebrityApi('/votes');
};

/**
 * Gets a cached value, otherwise caches a new value and returns
 */
var getCachedValue = function(valueName, func) {
  return new promise(function(resolve, reject) {
    var value = cache.get(valueName);

    if(value === undefined){
      func().then(function(obj) {
        cache.set(valueName, obj);
        resolve(obj);
      });
    } else {
      resolve(value);
    }
  });
};

/**
 * Gets the information about the current spectatee's votes
 */
exports.votes = function() {
  return getCachedValue('votes', getCurrentVotes);
};

/**
 * Gets the information about the current spectatee and the queue
 */
exports.current = function() {
  return getCachedValue('current', getCurrentInfo);
};

/**
 * Gets the information about the current queue
 */
exports.queue = function() {
  return getCachedValue('queue', getCurrentQueue);
};