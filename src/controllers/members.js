import {Member} from '../models';

module.exports = {
  index(req, res) {
    return Member.findById(1, {
      attributes: ['member'],
    })
      .then(members => {
        res.status(200).send(members.member);
      })
      .catch(err => res.status(400).send(err.toString()));
  },

  update(req, res) {
    return Member.findById(1)
      .then(updateMember => {
        if (!updateMember) {
          return res.status(404).send({message: 'Member not found'});
        }
        return updateMember
          .update(req.body, {fields: Object.keys(req.body)})
          .then(() => res.status(200).send(updateMember.member))
          .catch(err => res.status(400).send(err.toString()));
      })
      .catch(err => res.status(400).send(err.toString()));
  },
};
