'use strict';

module.exports = (sequelizeClient, DataTypes) => {
  const Portfolio = sequelizeClient.define('Portfolio', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    researchAndEvaluation: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    mentalHealthService: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    dataModels: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    logicModels: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    plans: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    forms: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    policiesAndProcedures: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    grants: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    brochures: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    presentations: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
  });
  return Portfolio;
};
