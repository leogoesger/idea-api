'use strict';

module.exports = (sequelizeClient, DataTypes) => {
  const Portfolio = sequelizeClient.define('Portfolio', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    portfolio: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
  });
  return Portfolio;
};
