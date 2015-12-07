'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TwitchUserDetail = new Schema({
      id: Number,
      name: String,
      username: String,
    }, {
      collection: 'twitchUser'
    });

module.exports = mongoose.model('twitchUser', TwitchUserDetail);