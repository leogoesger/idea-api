const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};

const nodeMailerMailgun = nodemailer.createTransport(mg(auth));

module.exports = {
  submit(req, res) {
    const {name, email, phone, msg} = req.body;
    if (!name || !email || !phone || !msg) {
      res.status(400).send('Invalid form');
      return;
    }
    const mailOptions = {
      from: `${name} <${email}>`, // sender address
      to: 'ncallahan.idea@gmail.com', // list of receivers
      subject: 'IDEA Consulting Contact Form', // Subject line
      text: 'Phone: ' + phone + '\n' + msg, // plain text body
    };
    nodeMailerMailgun.sendMail(mailOptions, (error, info) => {
      if (error) {
        throw error;
      }
      console.log('Response: ' + info); //eslint-disable-line
    });
    res.status(200).send('Form Submitted!');
  },
};
