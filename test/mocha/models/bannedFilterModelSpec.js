'use strict';

/**
 * Module dependencies.
 */
var chai = require('chai'),
    expect = chai.expect,
    _ = require('lodash'),
    winston = require('../../../config/winston'),
    BannedFilter = require('../../../app/models/banned_filter');

chai.should();

//The tests
describe('BannedFilter model', function() {

    var filterModel;
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

        filterModel = BannedFilter(sequelizeStub, datatypesStub);

    });

    describe('name', function(){
        it('should be equal to: BannedFilter', function(){
            filterModel.name.should.equal('BannedFilter');
        });
    });

    describe('data', function() {
        it('should have primary key id', function() {
            filterModel.fields.id.type.should.exist.and.equal('bigint');
            filterModel.fields.id.primaryKey.should.exist.and.equal(true);
        });
        it('should have startsWith', function() {
            filterModel.fields.startsWith.type.should.exist.and.equal('string');
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
