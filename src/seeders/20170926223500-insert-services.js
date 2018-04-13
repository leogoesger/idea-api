'use strict';
const {services} = require('../seeder-data');

module.exports = {
  up: (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Services', services);
  },
  down: (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Services');
  },
};
