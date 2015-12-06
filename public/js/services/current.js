'use strict';

angular.module('osucelebrity.current').factory("CurrentSocket", ['socketFactory', function(socketFactory) {
    return socketFactory();
}]);