'use strict';

angular.module('osucelebrity.current').controller('CurrentController', 
    ['$scope', '$interval', 'intervals', 'Current',
    function ($scope, $interval, intervals, Current) {
    var loadCurrent = function() {
        Current.player.get({}, function(player) {
            $scope.current = player;
        });
    };
    
    var currentTimer = $interval(loadCurrent, intervals.player);
    loadCurrent();

    $scope.$on("$destroy",function(event) {
      $interval.cancel(currentTimer);
    });
}]);