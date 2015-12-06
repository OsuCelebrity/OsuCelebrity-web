'use strict';

angular.module('osucelebrity.current').controller('QueueController', 
    ['_', '$scope', '$interval', 'intervals', 'Current', 
    function (_, $scope, $interval, intervals, Current) {
    var loadQueue = function() {
        Current.queue.query({}, function(queue) {
            $scope.queue = queue;
        });
    };
    
    var queueTimer = $interval(loadQueue, intervals.queue);
    loadQueue();

    $scope.$on("$destroy",function(event) {
      $interval.cancel(queueTimer);
    });
}]);