
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
  
  const User_community = sequelize.define('subscriptions', {
        created_at : DataTypes.DATE,
        updated_at : DataTypes.DATE,
        user_id : DataTypes.INTEGER,
        community_id : DataTypes.INTEGER,
      },{underscored: true}
    );

    
    

  User_community.associate = (models) => {
      User_community.belongsTo(models.User) 
      User_community.belongsTo(models.Community) 
  }
  
  return User_community
}