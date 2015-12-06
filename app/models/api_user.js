'use strict';

/**
	* ApiUser Model
	*/

var crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	var ApiUser = sequelize.define('ApiUser', 
		{
			gameMode: {type: DataTypes.INTEGER, field: "GAMEMODE"},
			userId: {type: DataTypes.INTEGER, field: "USERID"},
			accuracy: {type: DataTypes.DOUBLE, field: "ACCURACY"},
			country: {type: DataTypes.STRING, field: "COUNTRY"},
			downloaded: {type: DataTypes.BIGINT, field: "DOWLOADED"},
			level: {type: DataTypes.DOUBLE, field: "LEVEL"},
			playcount: {type: DataTypes.INTEGER, field: "PLAYCOUNT"},
			pp: {type: DataTypes.DOUBLE, field: "PP"},
			rank: {type: DataTypes.INTEGER, field: "RANK"}
		},
		{
			freezeTableName: true,
			tableName: 'APIUSER',
			timestamps: false,
			instanceMethods: {
				toJSON: function () {
					return this.get();
				}
			},
			associate: function(models) {
				ApiUser.removeAttribute('id');
			}
		}
	);

	return ApiUser;
};
