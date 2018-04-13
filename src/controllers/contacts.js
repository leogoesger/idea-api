import {Contact} from '../models';

module.exports = {
  index(req, res) {
    return Contact.findAll()
      .then(contacts => {
        res.status(200).send(contacts);
      })
      .catch(err => res.status(400).send(err.toString()));
  },
};
