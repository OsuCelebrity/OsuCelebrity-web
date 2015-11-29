'use strict';

/**
	* QueuedPlayer Model
	*/

var crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	var QueuedPlayer = sequelize.define('QueuedPlayer', 
		{
			id: {type: DataTypes.BIGINT, field: 'ID', primaryKey: true},
			playerUserIdOid: {type: DataTypes.INTEGER, field: 'PLAYER_USERID_OID', allowNull: true},
			queueSource: {type: DataTypes.STRING, field: 'QUEUESOURCE'},
			queueDate: {type: DataTypes.BIGINT, field: 'QUEUEDAT'},
			startDate: {type: DataTypes.BIGINT, field: 'STARTEDAT'},
			state: {type: DataTypes.INTEGER, field: 'STATE'},
			stoppingAt: {type: DataTypes.BIGINT, field: 'STOPPINGAT'},
			lastRemainingTimeUpdate: {type: DataTypes.BIGINT, field: 'LASTREMAININGTIMEUPDATE', defaultValue: 0},
			boost: {type: DataTypes.INTEGER, field: 'BOOST', defaultValue: 0}

		},
		{
			freezeTableName: true,
			tableName: 'QUEUEDPLAYER',
			instanceMethods: {
				toJSON: function () {
					return this.get();
				}
			},
			associate: function(models) {
				
			}
		}
	);

	return QueuedPlayer;
};
