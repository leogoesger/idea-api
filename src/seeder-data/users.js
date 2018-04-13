const bcrypt = require('bcrypt');
module.exports = [
  {
    email: 'test@nelly.co',
    password: bcrypt.hashSync('pass', 10),
    createdAt: '2017-11-12 19:35:54.972-08',
    updatedAt: '2017-11-12 19:35:54.972-08',
  },
];
