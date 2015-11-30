'use strict';

/**
 * Module dependencies.
 */
var chai = require('chai'),
    expect = chai.expect,
    _ = require('lodash'),
    winston = require('../../../config/winston'),
    QueueVote = require('../../../app/models/queue_vote');

chai.should();

//The tests
describe('QueueVote model', function() {

    var voteModel;
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

        voteModel = QueueVote(sequelizeStub, datatypesStub);

    });

    describe('name', function(){
        it('should be equal to: QueueVote', function(){
            voteModel.name.should.equal('QueueVote');
        });
    });

    describe('data', function() {
        it('should have primary key id', function() {
            voteModel.fields.id.type.should.exist.and.equal('bigint');
            voteModel.fields.id.primaryKey.should.exist.and.equal(true);
        });
        it('should have referenceIdOid', function() {
            voteModel.fields.referenceIdOid.type.should.exist.and.equal('bigint');
        });
        it('should have twitchUser', function() {
            voteModel.fields.twitchUser.type.should.exist.and.equal('string');
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
