'use strict';

angular.module('osucelebrity', ['ngCookies', 'ngResource', 'ui.router', 'lodash', 
  'osucelebrity.system', 'osucelebrity.current']);

angular.module('osucelebrity.system', ['osucelebrity.config']);
angular.module('osucelebrity.current', ['btford.socket-io']);