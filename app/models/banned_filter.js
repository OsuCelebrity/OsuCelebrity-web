'use strict';

/**
	* BannedFilter Model
	*/

var crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	var BannedFilter = sequelize.define('BannedFilter', 
		{
			id: {type: DataTypes.BIGINT, field: "ID", primaryKey: true},
			startswith: {type: DataTypes.STRING, field: "STARTSWITH"}
		},
		{
			freezeTableName: true,
			tableName: 'BANNEDFILTER',
			instanceMethods: {
				toJSON: function () {
					return this.get();
				}
			},
			associate: function(models) {
				
			}
		}
	);

	return BannedFilter;
};
