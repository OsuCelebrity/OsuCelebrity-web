'use strict';

angular.module('osucelebrity.current').controller('CurrentController', ['_', '$scope', 'CurrentSocket', 
    function (_, $scope, socket) {

    socket.on('current', function (data) {
      $scope.current = data;
    });

    socket.on('connect', function() {
      console.log('Connected to OsuCelebrity');
    });

    socket.on('disconnect', function() {
      $scope.current = null;
    });
}]);