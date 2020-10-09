require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// create transporter to handle delivering of message
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_USERNAME,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

/*       EMAIL/POST ROUTES       */
// --------------------- //

// API Call to send email with data from CONTACT FORM
router.post('/mail', (req, res) => {
  const mailer = req.body.email;

  const mailOptions = {
    from: process.env.NODEMAILER_USERNAME,
    to: 'alexanderjcalvillo@gmail.com',
    subject: `New Contact Request from Portfolio: From ${mailer.name} | ${mailer.subject}`,
    text: mailer.message,
    html: `
          <p>Reply To: ${mailer.email}</p>
          <p>Name: ${mailer.name}</p>
          <p>${mailer.message} </p>
        `,
  };

  try {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
    });

    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = router;
