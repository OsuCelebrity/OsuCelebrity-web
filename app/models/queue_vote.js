'use strict';

/**
	* QueueVote Model
	*/

var crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	var QueueVote = sequelize.define('QueueVote', 
		{
			id: {type: DataTypes.BIGINT, field: 'ID', primaryKey: true},
			queueUser: {type: DataTypes.BIGINT, field: 'REFERENCE_ID_OID', allowsNull: true},
			twitchUser: {type: DataTypes.STRING, field: 'TWITCHUSER'}
		},
		{
			freezeTableName: true,
			tableName: 'QUEUEVOTE',
			timestamps: false,
			instanceMethods: {
				toJSON: function () {
					return this.get();
				}
			},
			associate: function(models) {
				
			}
		}
	);

	return QueueVote;
};
