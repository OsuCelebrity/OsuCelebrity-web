'use strict';

angular.module('osucelebrity.system').controller('HeaderController', ['$scope', 'Global', 
  function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Vote",
        "link": "votes"
    }];
    
    $scope.isCollapsed = false;
}]);