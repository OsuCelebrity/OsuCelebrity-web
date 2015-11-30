'use strict';

module.exports = function(sequelize, DataTypes) {

  var Session = sequelize.define('Session', 
    {
      sid: {type: DataTypes.STRING, primaryKey: true }, 
      expires: {type: DataTypes.DATE, allowNull: true },
      data: {type: DataTypes.TEXT}
    },
    {
      freezeTableName: true,
      tableName: 'SESSION'
    }
  );

  return Session;
};
