import {Contract} from '../models';

module.exports = {
  index(req, res) {
    return Contract.findById(1)
      .then(contracts => {
        res.status(200).send(contracts.contract);
      })
      .catch(err => res.status(400).send(err.toString()));
  },

  update(req, res) {
    return Contract.findById(1)
      .then(contract => {
        if (!contract) {
          return res.status(404).send({message: 'Contract not found'});
        }
        return contract
          .update(req.body, {fields: Object.keys(req.body)})
          .then(() => res.status(200).send(contract))
          .catch(err => res.status(400).send(err.toString()));
      })
      .catch(err => res.status(400).send(err.toString()));
  },
};
