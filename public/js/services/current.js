'use strict';

//Articles service used for spectate REST endpoint
angular.module('osucelebrity.current').factory("Current", ['$resource', function($resource) {
    return {
      player: $resource('api/current'),
      votes: $resource('api/votes'),
      queue: $resource('api/queue')
    };
}]);