'use strict';

/**
	* Vote Model
	*/

var crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	var Vote = sequelize.define('Vote', 
		{
			id: {type: DataTypes.INTEGER, field: 'ID', primaryKey: true},
			referenceIdOid: {type: DataTypes.BIGINT, field: 'REFERENCE_ID_OID'},
			twitchUser: {type: DataTypes.STRING, field: 'TWITCHUSER'},
			voteTime: {type: DataTypes.BIGINT, field: 'VOTETIME'},
			voteType: {type: DataTypes.STRING, field: 'VOTETYPE'}
		},
		{
			freezeTableName: true,
			tableName: 'VOTE',
			instanceMethods: {
				toJSON: function () {
					return this.get();
				}
			},
			associate: function(models) {
				Vote.belongsTo(models.QueuedPlayer, {as: 'QueuedPlayer', foreignKey: 'VOTE_FK1', targetKey: 'id'})
			}
		}
	);

	return Vote;
};
