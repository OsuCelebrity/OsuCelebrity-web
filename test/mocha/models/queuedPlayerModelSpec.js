'use strict';

/**
 * Module dependencies.
 */
var chai = require('chai'),
    expect = chai.expect,
    _ = require('lodash'),
    winston = require('../../../config/winston'),
    QueuedPlayer = require('../../../app/models/queued_player');

chai.should();

//The tests
describe('QueuedPlayer model', function() {

    var queuedPlayerModel;
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

        queuedPlayerModel = QueuedPlayer(sequelizeStub, datatypesStub);

    });

    describe('name', function(){
        it('should be equal to: QueuedPlayer', function(){
            queuedPlayerModel.name.should.equal('QueuedPlayer');
        });
    });

    describe('data', function() {
        it('should have primary key id', function() {
            queuedPlayerModel.fields.id.type.should.exist.and.equal('bigint');
            queuedPlayerModel.fields.id.primaryKey.should.exist.and.equal(true);
        });
        it('should have osuUser', function() {
            queuedPlayerModel.fields.osuUser.type.should.exist.and.equal('integer');
        });
        it('should have queueSource', function() {
            queuedPlayerModel.fields.queueSource.type.should.exist.and.equal('string');
        });
        it('should have queueDate', function() {
            queuedPlayerModel.fields.queueDate.type.should.exist.and.equal('bigint');
        });
        it('should have startDate', function() {
            queuedPlayerModel.fields.startDate.type.should.exist.and.equal('bigint');
        });
        it('should have state', function() {
            queuedPlayerModel.fields.state.type.should.exist.and.equal('integer');
        });
        it('should have stoppingAt', function() {
            queuedPlayerModel.fields.stoppingAt.type.should.exist.and.equal('bigint');
        });
        it('should have lastRemainingTimeUpdate', function() {
            queuedPlayerModel.fields.lastRemainingTimeUpdate.type.should.exist.and.equal('bigint');
        });
        it('should have boost', function() {
            queuedPlayerModel.fields.boost.type.should.exist.and.equal('integer');
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
