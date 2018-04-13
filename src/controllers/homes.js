import {Home} from '../models';

module.exports = {
  index(req, res) {
    return Home.findAll()
      .then(homes => {
        res.status(200).send(homes);
      })
      .catch(err => res.status(400).send(err.toString()));
  },
};
