'use strict';

/**
	* TwitchUser Model
	*/

var crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	var TwitchUser = sequelize.define('TwitchUser', 
		{
			id: {type: DataTypes.INTEGER, field: 'TWITCHUSERID', primaryKey: true},
			name: {type: DataTypes.STRING, field: 'NAME'},
			username: {type: DataTypes.STRING, field: 'USERNAME'}
		},
		{
			freezeTableName: true,
			tableName: 'TWITCHUSER',
			instanceMethods: {
				toJSON: function () {
					return this.get();
				}
			},
			associate: function(models) {
				
			}
		}
	);

	return TwitchUser;
};
