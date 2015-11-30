'use strict';

/**
 * Module dependencies.
 */
var chai = require('chai'),
    expect = chai.expect,
    _ = require('lodash'),
    winston = require('../../../config/winston'),
    OsuUser = require('../../../app/models/osu_user');

chai.should();

//The tests
describe('OsuUser model', function() {

    var userModel;
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
            BIGINT: 'bigint',
            BOOLEAN: 'boolean'
        };

        userModel = OsuUser(sequelizeStub, datatypesStub);

    });

    describe('name', function(){
        it('should be equal to: OsuUser', function(){
            userModel.name.should.equal('OsuUser');
        });
    });

    describe('data', function() {
        it('should have primary key userId', function() {
            userModel.fields.userId.type.should.exist.and.equal('integer');
            userModel.fields.userId.primaryKey.should.exist.and.equal(true);
        });
        it('should have downloaded', function() {
            userModel.fields.downloaded.type.should.exist.and.equal('bigint');
        });
        it('should have username', function() {
            userModel.fields.username.type.should.exist.and.equal('string');
        });
        it('should have privilege', function() {
            userModel.fields.privilege.type.should.exist.and.equal('string');
        });
        it('should have allowsSpectating', function() {
            userModel.fields.allowsSpectating.type.should.exist.and.equal('boolean');
            userModel.fields.allowsSpectating.defaultValue.should.exist.and.equal(true);
        });
        it('should have allowsNotifications', function() {
            userModel.fields.allowsNotifications.type.should.exist.and.equal('boolean');
            userModel.fields.allowsNotifications.defaultValue.should.exist.and.equal(true);
        });
        it('should have gameMode', function() {
            userModel.fields.gameMode.type.should.exist.and.equal('integer');
            userModel.fields.gameMode.defaultValue.should.exist.and.equal(0);
        });
        it('should have timeOutUntil', function() {
            userModel.fields.timeOutUntil.type.should.exist.and.equal('bigint');
            userModel.fields.timeOutUntil.defaultValue.should.exist.and.equal(-1);
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
