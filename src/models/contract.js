'use strict';

module.exports = (sequelizeClient, DataTypes) => {
  const Contract = sequelizeClient.define('Contract', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    stateContracts: {
      type: DataTypes.ARRAY(DataTypes.TEXT), // eslint-disable-line
      allowNull: true,
    },
    countyContracts: {
      type: DataTypes.ARRAY(DataTypes.TEXT), // eslint-disable-line
      allowNull: true,
    },
  });
  return Contract;
};
