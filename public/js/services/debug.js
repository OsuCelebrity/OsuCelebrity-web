'use strict';

angular.module('osucelebrity.system').factory("Debug", function(debug, $rootScope) {
  return {
    isDebugging: debug,
    emit: function(msg, data) {
      if(this.isDebugging) {
        $rootScope.$broadcast(msg, data);
      }
    }
  };
});
