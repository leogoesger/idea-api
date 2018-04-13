'use strict';

module.exports = (sequelizeClient, DataTypes) => {
  const Contact = sequelizeClient.define('Contact', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    contact: {
      type: DataTypes.ARRAY(DataTypes.TEXT), // eslint-disable-line
      allowNull: true,
    },
  });
  return Contact;
};
