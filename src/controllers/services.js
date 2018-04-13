import {Service} from '../models';

module.exports = {
  index(req, res) {
    return Service.findAll()
      .then(services => {
        res.status(200).send(services);
      })
      .catch(err => res.status(400).send(err.toString()));
  },

  update(req, res) {
    return Service.findById(1)
      .then(service => {
        if (!service) {
          return res.status(404).send({message: 'Service not found'});
        }
        return service
          .update(req.body, {fields: Object.keys(req.body)})
          .then(() => res.status(200).send(service))
          .catch(err => res.status(400).send(err.toString()));
      })
      .catch(err => res.status(400).send(err.toString()));
  },
};
