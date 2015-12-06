'use strict';

/**
 * Module dependencies.
 */
var chai = require('chai'),
    expect = chai.expect,
    _ = require('lodash'),
    winston = require('../../../config/winston'),
    PlayerActivity = require('../../../app/models/player_activity');

chai.should();

//The tests
describe('PlayerActivity model', function() {

    var activityModel;
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

        activityModel = PlayerActivity(sequelizeStub, datatypesStub);

    });

    describe('name', function(){
        it('should be equal to: PlayerActivity', function(){
            activityModel.name.should.equal('PlayerActivity');
        });
    });

    describe('data', function() {
        it('should have gameMode', function() {
            activityModel.fields.gameMode.type.should.exist.and.equal('integer');
        });
        it('should have queueUser', function() {
            activityModel.fields.queueUser.type.should.exist.and.equal('integer');
        });
        it('should have lastActivity', function() {
            activityModel.fields.lastActivity.type.should.exist.and.equal('bigint');
        });
        it('should have lastChecked', function() {
            activityModel.fields.lastChecked.type.should.exist.and.equal('bigint');
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
