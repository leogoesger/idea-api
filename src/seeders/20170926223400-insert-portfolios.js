'use strict';
const {portfolios} = require('../seeder-data');

module.exports = {
  up: (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Portfolios', portfolios);
  },
  down: (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Portfolios');
  },
};
