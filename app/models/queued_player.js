'use strict';

/**
	* QueuedPlayer Model
	*/

var crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	var QueuedPlayer = sequelize.define('QueuedPlayer', 
		{
			id: {type: DataTypes.BIGINT, field: 'ID', primaryKey: true},
			osuUser: {type: DataTypes.INTEGER, field: 'PLAYER_USERID_OID', allowNull: true},
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
			timestamps: false,
			instanceMethods: {
				toJSON: function () {
					return this.get();
				},
				getVotes: function(db) {
					return db.Vote.findAll({where:{queueUser: this.id}});
				}
			},
			classMethods: {
				getCurrentPlayer: function() {
					return QueuedPlayer.scope('current').findOne();
				},
				associate: function(models) {
					
				}
			},
			scopes: {
				cancelled: { where: { state: -2 } },
				done: { where: { state: -1 } },
				current: { where: { state: 0 } },
				next: { where: { state: 1 } },
				queued: { where: { state: 2 } },
			}
		}
	);

	return QueuedPlayer;
};
