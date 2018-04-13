const authenticate = require('../middlewares/authenticate').authenticate;

const contactsController = require('../controllers').contacts;
const contractsController = require('../controllers').contracts;
const homesController = require('../controllers').homes;
const membersController = require('../controllers').members;
const portfoliosController = require('../controllers').portfolios;
const servicesController = require('../controllers').services;
const usersController = require('../controllers').users;

module.exports = app => {
  app.get('/api/contacts', contactsController.index);
  app.put('/api/contacts', contactsController.update);

  app.get('/api/contracts', contractsController.index);
  app.put('/api/contracts', contractsController.update);

  app.get('/api/homes', homesController.index);
  app.put('/api/homes', homesController.update);

  app.get('/api/members', membersController.index);
  app.put('/api/members', membersController.update);

  app.get('/api/portfolios', portfoliosController.index);
  app.put('/api/portfolios', portfoliosController.update);

  app.get('/api/services', servicesController.index);
  app.put('/api/services', servicesController.update);

  app.post('/api/login', usersController.login);
  app.get('/api/users/me', authenticate, usersController.getMe);
};
