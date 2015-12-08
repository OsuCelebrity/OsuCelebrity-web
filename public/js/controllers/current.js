'use strict';

angular.module('osucelebrity.current').controller('CurrentController', ['_', '$scope', 'CurrentSocket', 'Debug',
    function (_, $scope, socket, Debug) {

    socket.on('current', function (data) {
      $scope.current = data;
    });

    socket.on('connect', function() {
      console.log('Connected to OsuCelebrity');
    });

    socket.on('disconnect', function() {
      $scope.current = null;
    });

    //Debugging functions
    $scope.$on('spoof', function(event, args) {
      socket.emit('spoof');
    });
}]);