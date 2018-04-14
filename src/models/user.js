'use strict';
const jwt = require('jsonwebtoken');

module.exports = (sequelizeClient, DataTypes) => {
  const User = sequelizeClient.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  User.findByToken = token => {
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.CRYPTO_KEY);
    } catch (e) {
      return Promise.reject();
    }
    return User.find({where: {email: decoded.email}});
  };
  return User;
};
