'use strict';
const {contacts} = require('../seeder-data');

module.exports = {
  up: (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Contacts', contacts);
  },
  down: (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Contacts');
  },
};
