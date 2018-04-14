import {Home} from '../models';

module.exports = {
  index(req, res) {
    return Home.findById(1)
      .then(homes => {
        res.status(200).send(homes.home);
      })
      .catch(err => res.status(400).send(err.toString()));
  },

  update(req, res) {
    return Home.findById(1)
      .then(home => {
        console.log(req.body);
        if (!home) {
          return res.status(404).send({message: 'Home not found'});
        }
        return home
          .update(req.body, {fields: Object.keys(req.body)})
          .then(() => res.status(200).send(home))
          .catch(err => res.status(400).send(err.toString()));
      })
      .catch(err => res.status(400).send(err.toString()));
  },
};
