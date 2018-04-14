const authenticate = require('../middlewares/authenticate').authenticate;

const contactsController = require('../controllers').contacts;
const contractsController = require('../controllers').contracts;
const homesController = require('../controllers').homes;
const membersController = require('../controllers').members;
const portfoliosController = require('../controllers').portfolios;
const servicesController = require('../controllers').services;
const usersController = require('../controllers').users;
const submitController = require('../controllers').submit;

module.exports = app => {
  app.get('/api/contacts', contactsController.index);
  app.put('/api/contacts', authenticate, contactsController.update);

  app.get('/api/contracts', contractsController.index);
  app.put('/api/contracts', authenticate, contractsController.update);

  app.get('/api/homes', homesController.index);
  app.put('/api/homes', authenticate, homesController.update);

  app.get('/api/members', membersController.index);
  app.put('/api/members', authenticate, membersController.update);

  app.get('/api/portfolios', portfoliosController.index);
  app.put('/api/portfolios', authenticate, portfoliosController.update);

  app.get('/api/services', servicesController.index);
  app.put('/api/services', authenticate, servicesController.update);

  app.post('/api/login', usersController.login);
  app.get('/api/users/me', authenticate, usersController.getMe);

  app.post('/api/submit', submitController.submit);
};
