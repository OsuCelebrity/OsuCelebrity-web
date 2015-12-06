'use strict';

/**
* Module dependencies.
*/
var passport = require('passport');

module.exports = function(app, router, cache) {
// User Routes
var spectate = require('../controllers/spectate');

router.get('/votes', cache('1 second'), spectate.votes);
router.get('/current', cache('1 second'), spectate.current);
router.get('/queue', cache('1 second'), spectate.queue);
};