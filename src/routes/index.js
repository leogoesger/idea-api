const contactsController = require('../controllers').contacts;
const contractsController = require('../controllers').contracts;
const homesController = require('../controllers').homes;
const membersController = require('../controllers').members;
const portfoliosController = require('../controllers').portfolios;
const servicesController = require('../controllers').services;
const usersController = require('../controllers').users;

module.exports = app => {
  app.get('/api/contacts', contactsController.index);
  app.get('/api/contracts', contractsController.index);
  app.get('/api/homes', homesController.index);
  app.get('/api/members', membersController.index);
  app.get('/api/portfolios', portfoliosController.index);
  app.get('/api/services', servicesController.index);
  app.get('/api/users', usersController.index);
};
