'use strict';

/**
	* OsuUser Model
	*/

var crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	var OsuUser = sequelize.define('OsuUser', 
		{
			userId: {type: DataTypes.INTEGER, field: 'USERID', primaryKey: true},
			downloaded: {type: DataTypes.BIGINT, field: 'DOWNLOADED'},
			username: {type: DataTypes.STRING, field: 'USERNAME'},
			privilege: {type: DataTypes.STRING, field: 'PRIVILEGE'},
			allowsSpectating: {type: DataTypes.BOOLEAN, field: 'ALLOWSSPECTATING', defaultValue: true},
			allowsNotifications: {type: DataTypes.BOOLEAN, field: 'ALLOWSNOTIFICATIONS', defaultValue: true},
			gameMode: {type: DataTypes.INTEGER, field: 'GAMEMODE', defaultValue: 0},
			timeOutUntil: {type: DataTypes.BIGINT, field: 'TIMEOUTUNTIL', defaultValue: -1}
		},
		{
			freezeTableName: true,
			tableName: 'OSUUSER',
			instanceMethods: {
				toJSON: function () {
					return this.get();
				}
			},
			associate: function(models) {
				
			}
		}
	);

	return OsuUser;
};
