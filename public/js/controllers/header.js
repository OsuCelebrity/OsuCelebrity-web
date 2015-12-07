'use strict';

angular.module('osucelebrity.system').controller('HeaderController', ['$scope', 'Global', 'Debug',
  function ($scope, Global, Debug) {
    $scope.global = Global;

    $scope.spoof = function() {
      Debug.emit('spoof');
    }
}]);