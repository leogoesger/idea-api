const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
import {User} from '../models';

module.exports = {
  login(req, res) {
    if (!req.body.email || !req.body.password) {
      res.status(400).send('email not found');
      return;
    }

    User.find({
      where: {
        email: req.body.email,
      },
    })
      .then(user => {
        bcrypt.compare(req.body.password, user.password, (err, response) => {
          if (err || !response) {
            return res.status(404).send({message: 'Wrong Password!'});
          }
          const ideaJWT = jwt.sign(
            {firstName: user.firstName, email: req.body.email},
            process.env.CRYPTO_KEY
          );
          return res.status(200).send({ideaJWT, user});
        });
      })
      .catch(() =>
        res.status(400).send({message: 'Could not find your email!'})
      );
  },

  getMe(req, res) {
    User.findById(req.user.id, {})
      .then(user => res.status(200).send(user))
      .catch(err => res.status(404).send(err));
  },
};
