'use strict';

/**
 * Module dependencies.
 */
var chai = require('chai'),
    expect = chai.expect,
    _ = require('lodash'),
    winston = require('../../../config/winston'),
    ApiUser = require('../../../app/models/api_user');

chai.should();

//The tests
describe('ApiUser model', function() {

    var apiUserModel;
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

        apiUserModel = ApiUser(sequelizeStub, datatypesStub);

    });

    describe('name', function(){
        it('should be equal to: ApiUser', function(){
            apiUserModel.name.should.equal('ApiUser');
        });
    });

    describe('data', function() {
        it('should have gameMode', function() {
            apiUserModel.fields.gameMode.type.should.exist.and.equal('integer');
        });
        it('should have userId', function() {
            apiUserModel.fields.userId.type.should.exist.and.equal('integer');
        });
        it('should have accuracy', function() {
            apiUserModel.fields.accuracy.type.should.exist.and.equal('double');
        });
        it('should have country', function() {
            apiUserModel.fields.country.type.should.exist.and.equal('string');
        });
        it('should have downloaded', function() {
            apiUserModel.fields.downloaded.type.should.exist.and.equal('bigint');
        });
        it('should have level', function() {
            apiUserModel.fields.level.type.should.exist.and.equal('double');
        });
        it('should have playcount', function() {
            apiUserModel.fields.playcount.type.should.exist.and.equal('integer');
        });
        it('should have pp', function() {
            apiUserModel.fields.pp.type.should.exist.and.equal('double');
        });
        it('should have rank', function() {
            apiUserModel.fields.rank.type.should.exist.and.equal('integer');
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
