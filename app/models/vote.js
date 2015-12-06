'use strict';

/**
	* Vote Model
	*/

var crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	var Vote = sequelize.define('Vote', 
		{
			id: {type: DataTypes.INTEGER, field: 'ID', primaryKey: true},
			queueUser: {type: DataTypes.BIGINT, field: 'REFERENCE_ID_OID', references: {
				model: 'QueuedPlayer',
				key: 'ID'
			}},
			twitchUser: {type: DataTypes.STRING, field: 'TWITCHUSER'},
			voteTime: {type: DataTypes.BIGINT, field: 'VOTETIME'},
			voteType: {type: DataTypes.STRING, field: 'VOTETYPE'}
		},
		{
			freezeTableName: true,
			tableName: 'VOTE',
			timestamps: false,
			instanceMethods: {
				toJSON: function () {
					var vote = this.get();
					delete vote.id;
					return vote;
				}
			},
			classMethods: {
				associate: function(models) {
					
				}
			}
		}
	);

	return Vote;
};
