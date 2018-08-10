'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contracts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      stateContracts: {
        type: Sequelize.ARRAY(Sequelize.TEXT), // eslint-disable-line
        allowNull: true,
      },
      countyContracts: {
        type: Sequelize.ARRAY(Sequelize.TEXT), // eslint-disable-line
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
    return queryInterface.dropTable('Contracts');
  },
};
