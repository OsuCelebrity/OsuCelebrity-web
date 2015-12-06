'use strict';

angular.module('osucelebrity.current').controller('CurrentController', ['_', '$scope', 'CurrentSocket', 
    function (_, $scope, socket) {

    socket.on('current', function (data) {
      console.log(data);
      $scope.current = data;
    });

    socket.on('connect', function() {
        
    });
}]);