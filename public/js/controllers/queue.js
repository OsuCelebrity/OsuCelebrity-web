'use strict';

angular.module('osucelebrity.current').controller('QueueController', 
    ['$scope', 'CurrentSocket', 
    function ($scope, socket) {
    
    socket.on('queue', function (data) {
      $scope.queue = data;
    });

    socket.on('connect', function() {
        
    });
}]);