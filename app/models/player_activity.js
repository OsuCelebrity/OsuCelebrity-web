'use strict';

/**
	* PlayerActivity Model
	*/

var crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	var PlayerActivity = sequelize.define('PlayerActivity', 
		{
			userGameModeOid: {type: DataTypes.INTEGER, field: 'USER_GAMEMODE_OID'},
			userUserIdOid: {type: DataTypes.INTEGER, field: 'USER_USERID_OID'},
			lastActivity: {type: DataTypes.BIGINT, field: 'LASTACTIVITY'},
			lastChecked: {type: DataTypes.BIGINT, field: 'LASTCHECKED'}
		},
		{
			freezeTableName: true,
			tableName: 'PLAYERACTIVITY',
			instanceMethods: {
				toJSON: function () {
					return this.get();
				}
			},
			associate: function(models) {
				PlayerActivity.removeAttribute('id');
			}
		}
	);

	return PlayerActivity;
};
