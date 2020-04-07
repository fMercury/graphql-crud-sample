'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserProfile = sequelize.define('UserProfile', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    publickey: DataTypes.STRING
  }, {});
  UserProfile.associate = function(models) {
    // associations can be defined here
    UserProfile.hasMany( models.Infraction, {
      foreignKey: "infractionId",
      as: "infractions",
    } )
  };
  return UserProfile;
};