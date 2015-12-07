'use strict';

//Setting up route
angular.module('osucelebrity').config(
    function($stateProvider, $urlRouterProvider) {
        //$urlRouterProvider.otherwise("/");
        
        $stateProvider
            .state('index', {
                url: "/",
                templateUrl: "views/index.html",
                controller: "IndexController"
            })
            .state('login', {
                controller: function($window) {
                    $window.open('/auth/twitch', '_self');
                }
            })
            .state('signout', {
                controller: function($window) {
                    $window.open('/signout', '_self');
                }
            })
            .state('current', {
                url: "/current",
                templateUrl: "views/current.html"
            });
    }
)
.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.html5Mode({
            enabled:true,
            requireBase: false
        });
    }
]);