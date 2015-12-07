'use strict';

angular.module('osucelebrity', ['ngCookies', 'ngResource', 'ui.router', 'lodash', 
  'osucelebrity.config', 'osucelebrity.system', 'osucelebrity.current']);

angular.module('osucelebrity.system', []);
angular.module('osucelebrity.current', ['btford.socket-io']);