'use strict';

angular.module('osucelebrity.system').factory("Debug", function($rootScope) {
  return {
    emit: function(msg, data) {
      $rootScope.$broadcast(msg, data);
    }
  }
});
