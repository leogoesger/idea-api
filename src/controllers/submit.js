const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'ilbjbfgzew6jsf4m@ethereal.email',
      pass: 'zTu6hYBXCG3yJgzQb3'
  }
});

module.exports = {
  submit(req, res) {
    const {name, email, phone, msg} = req.body;
    if (!name || !email || !phone || !msg) {
      res.status(400).send('Invalid form');
      return;
    }
    let mailOptions = {
      from: `${name} <${email}>`, // sender address
      to: 'bar@example.com, baz@example.com', // list of receivers
      subject: 'IDEA Consulting Contact Form', // Subject line
      text: msg, // plain text body
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    })
    res.status(200).send('Form Submitted!');
  },
};  