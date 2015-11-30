'use strict';

/**
 * Module dependencies.
 */
var chai = require('chai'),
    expect = chai.expect,
    _ = require('lodash'),
    winston = require('../../../config/winston'),
    TwitchUser = require('../../../app/models/twitch_user');

chai.should();

//The tests
describe('TwitchUser model', function() {

    var twitchUserModel;
    before(function() {

        var sequelizeStub = {
            define: function(modelName, fields, properties){
                return {
                    name : modelName,
                    fields: fields,
                    properties: properties
                };
            }
        };

        var datatypesStub = {
            STRING: 'string',
            INTEGER: 'integer',
            DOUBLE: 'double',
            BIGINT: 'bigint'
        };

        twitchUserModel = TwitchUser(sequelizeStub, datatypesStub);

    });

    describe('name', function(){
        it('should be equal to: TwitchUser', function(){
            twitchUserModel.name.should.equal('TwitchUser');
        });
    });

    describe('data', function() {
        it('should have id', function() {
            twitchUserModel.fields.id.type.should.exist.and.equal('integer');
        });
        it('should have name', function() {
            twitchUserModel.fields.name.type.should.exist.and.equal('string');
        });
        it('should have username', function() {
            twitchUserModel.fields.username.type.should.exist.and.equal('string');
        });
    });

    describe('properties', function(){
        describe('instance methods', function(){
            
        });
    });

    after(function(done) {
        done();
    });

});
