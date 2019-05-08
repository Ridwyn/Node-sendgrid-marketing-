const dotenv = require('dotenv');
dotenv.config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.API_KEY);
const msg = {
  to: 'salihouridwyn@gmail.com',
  from: 'test@example.com',
  subject: 'Sending Twilio SendGrid',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>Testing from sendGrid Node.js</strong>',
};
sgMail.send(msg);


