'use strict';
module.exports = (sequelize, DataTypes) => {
  const Infraction = sequelize.define('Infraction', {
    user: DataTypes.STRING
  }, {});
  Infraction.associate = function(models) {
    // associations can be defined here
    Infraction.belongsTo(models.userprofile, {
      foreignKey: 'userProfileId',
      onDelete: 'CASCADE'
    })
  };
  return Infraction;
};