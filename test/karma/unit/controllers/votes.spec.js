(function() {
    'use strict';

    describe('OsuCelebrity controllers', function() {

        describe('VoteController', function() {
            // Load the controllers module
            beforeEach(module('osucelebrity.current'));

            var scope, VoteController;

            beforeEach(inject(function($controller, $rootScope) {
                scope = $rootScope.$new();

                VoteController = $controller('VoteController', {
                    $scope: scope
                });
            }));
        });
    });
})();