'use strict';

/**
 * sendEmail service
 */

const nodemailer = require('nodemailer');
const userEmail = "taichikato1106@gmail.com"
const userPass = "Spskjim@9939"
// Create reusable transporter object using SMTP transport.
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: userEmail,
    pass: userPass,
  },
});
module.exports = {
  create: (from, to, subject, text) => {
    // Setup e-mail data.
    const options = {
      from,
      to,
      subject,
      text,
    };
    // Return a promise of the function that sends the email.
    return transporter.sendMail(options);
  },
};
