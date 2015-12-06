'use strict';

/**
 * Module dependencies.
 */
var chai = require('chai'),
    expect = chai.expect,
    _ = require('lodash'),
    winston = require('../../../config/winston'),
    OsuIrcUser = require('../../../app/models/osu_irc_user');

chai.should();

//The tests
describe('OsuIrcUser model', function() {

    var osuIrcUser;
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

        osuIrcUser = OsuIrcUser(sequelizeStub, datatypesStub);

    });

    describe('name', function(){
        it('should be equal to: OsuIrcUser', function(){
            osuIrcUser.name.should.equal('OsuIrcUser');
        });
    });

    describe('data', function() {
        it('should have primary key ircName', function() {
            osuIrcUser.fields.ircName.type.should.exist.and.equal('string');
            osuIrcUser.fields.ircName.primaryKey.should.exist.and.equal(true);
        });
        it('should have resolved', function() {
            osuIrcUser.fields.resolved.type.should.exist.and.equal('bigint');
        });
        it('should have osuUser', function() {
            osuIrcUser.fields.osuUser.type.should.exist.and.equal('integer');
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
