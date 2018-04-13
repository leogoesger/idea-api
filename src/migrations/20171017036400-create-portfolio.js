'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Portfolios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      researchAndEvaluation: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      mentalHealthService: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      dataModels: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      logicModels: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      plans: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      forms: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      policiesAndProcedures: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      grants: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('Portfolios');
  },
};
