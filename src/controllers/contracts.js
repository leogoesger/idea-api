import {Contract} from '../models';

module.exports = {
  index(req, res) {
    return Contract.findAll()
      .then(contracts => {
        res.status(200).send(contracts);
      })
      .catch(err => res.status(400).send(err.toString()));
  },
};
