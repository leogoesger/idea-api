const papersController = require('../controllers').papers;
const membersController = require('../controllers').members;

module.exports = app => {
  app.get('/api/papers', papersController.index);
  app.get('/api/members', membersController.index);
};
