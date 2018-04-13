import {Portfolio} from '../models';

module.exports = {
  index(req, res) {
    return Portfolio.findAll()
      .then(members => {
        res.status(200).send(members);
      })
      .catch(err => res.status(400).send(err.toString()));
  },

  update(req, res) {
    return Portfolio.findById(1)
      .then(portfolio => {
        if (!portfolio) {
          return res.status(404).send({message: 'Portfolio not found'});
        }
        return portfolio
          .update(req.body, {fields: Object.keys(req.body)})
          .then(() => res.status(200).send(portfolio))
          .catch(err => res.status(400).send(err.toString()));
      })
      .catch(err => res.status(400).send(err.toString()));
  },
};
