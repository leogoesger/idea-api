'use strict';

module.exports = (sequelizeClient, DataTypes) => {
  const Home = sequelizeClient.define('Home', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    home: {
      type: DataTypes.ARRAY(DataTypes.TEXT), // eslint-disable-line
      allowNull: true,
    },
  });
  return Home;
};
