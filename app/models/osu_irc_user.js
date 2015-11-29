'use strict';

/**
	* OsuIrcUser Model
	*/

var crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	var OsuIrcUser = sequelize.define('OsuIrcUser', 
		{
			ircName: {type: DataTypes.STRING, field: "IRCNAME", primaryKey: true},
			resolved: {type: DataTypes.BIGINT, field: "RESOLVED"},
			userUserIdOld: {type: DataTypes.INTEGER, field: "USER_USERID_OLD"}
		},
		{
			freezeTableName: true,
			tableName: 'OSUIRCUSER',
			instanceMethods: {
				toJSON: function () {
					return this.get();
				}
			},
			associate: function(models) {
				OsuIrcUser.belongsTo(models.OsuUser, {foreignKey: 'OSUIRCUSER_FK1', targetName: 'USERID', as: 'OsuUser'});
			}
		}
	);

	return OsuIrcUser;
};
