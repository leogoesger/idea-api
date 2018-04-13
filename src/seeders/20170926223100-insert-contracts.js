'use strict';
const {contracts} = require('../seeder-data');

module.exports = {
  up: (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Contracts', contracts);
  },
  down: (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Contracts');
  },
};
