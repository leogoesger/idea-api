'use strict';
const {homes} = require('../seeder-data');

module.exports = {
  up: (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Homes', homes);
  },
  down: (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Homes');
  },
};
