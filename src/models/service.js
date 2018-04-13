'use strict';

module.exports = (sequelizeClient, DataTypes) => {
  const Service = sequelizeClient.define('Service', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    overviewServices: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    services: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
  });
  return Service;
};
