'use strict';

var lodash = angular.module('lodash', []);
lodash.factory('_', function() {
  return window._;
});