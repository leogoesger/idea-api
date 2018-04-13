import {Member} from '../models';

module.exports = {
  index(req, res) {
    return Member.findAll()
      .then(members => {
        res.status(200).send(members);
      })
      .catch(err => res.status(400).send(err.toString()));
  },

  update(req, res) {
    return Member.findById(req.params.memberId)
      .then(memeber => {
        if (!memeber) {
          return res.status(404).send({message: 'Member not found'});
        }
        return memeber
          .update(req.body, {fields: Object.keys(req.body)})
          .then(() => res.status(200).send(memeber))
          .catch(err => res.status(400).send(err.toString()));
      })
      .catch(err => res.status(400).send(err.toString()));
  },

  create(req, res) {
    Member.create(req.body)
      .then(member => res.status(201).send(member))
      .catch(err => res.status(400).send(err.toString()));
  },

  delete(req, res) {
    return Member.findById(req.params.memberId)
      .then(member => {
        if (!member) {
          return res.status(404).send({
            message: 'No memeber found',
          });
        }
        return member
          .destroy()
          .then(() => res.status(204).send({message: 'Member deleted'}))
          .catch(err => res.status(400).send(err));
      })
      .catch(err => res.status(400).send(err));
  },
};
