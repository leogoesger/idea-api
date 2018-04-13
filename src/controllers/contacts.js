import {Contact} from '../models';

module.exports = {
  index(req, res) {
    return Contact.findById(1)
      .then(contacts => {
        res.status(200).send(contacts.contact);
      })
      .catch(err => res.status(400).send(err.toString()));
  },

  update(req, res) {
    return Contact.findById(1)
      .then(contact => {
        if (!contact) {
          return res.status(404).send({message: 'Contact not found'});
        }
        return contact
          .update(req.body, {fields: Object.keys(req.body)})
          .then(() => res.status(200).send(contact))
          .catch(err => res.status(400).send(err.toString()));
      })
      .catch(err => res.status(400).send(err.toString()));
  },
};
