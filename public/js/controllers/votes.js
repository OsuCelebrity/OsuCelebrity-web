'use strict';

            
angular.module('osucelebrity.current').controller('VotesController', ['_', '$scope', 'CurrentSocket', 
    function (_, $scope, socket) {

    socket.on('votes', function (data) {
      $scope.votes = {
          up: _.filter(data, {voteType: 'UP'}),
          down: _.filter(data, {voteType: 'DOWN'})
      };
    });

    socket.on('connect', function() {
        
    });
}]);