'use strict';

angular.module('osucelebrity.current').controller('VotesController', 
    ['_', '$scope', '$interval', 'intervals', 'Current', 
    function (_, $scope, $interval, intervals, Current) {
    var loadVotes = function() {
        Current.votes.query({}, function(votes) {
            $scope.votes = {
                up: _.filter(votes, {voteType: 'UP'}),
                down: _.filter(votes, {voteType: 'DOWN'})
            };
        });
    };
    
    var voteTimer = $interval(loadVotes, intervals.vote);
    loadVotes();

    $scope.$on("$destroy",function(event) {
      $interval.cancel(voteTimer);
    });
}]);