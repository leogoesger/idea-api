'use strict';

module.exports = (sequelizeClient, DataTypes) => {
  const Member = sequelizeClient.define('Member', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    member: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
  });
  return Member;
};
