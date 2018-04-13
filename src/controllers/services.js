import {Service} from '../models';

module.exports = {
  index(req, res) {
    return Service.findAll()
      .then(services => {
        res.status(200).send(services);
      })
      .catch(err => res.status(400).send(err.toString()));
  },
};
