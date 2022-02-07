const { sendMail } = require('./mailcontroller');
const { google } = require('googleapis');
require('dotenv').config('../.env');

exports.sendEmailToUser = (req, res) => {
  console.log(req.user);
  const email = req.user.email;
  const userId = req.user.userId.toString();
  console.log(userId);
  if (!email) {
    return res.status(400).json({ message: 'Please enter a email address' });
  }
  const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIECT_URI
  );
  oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
  sendMail(email, oAuth2Client, userId)
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: `Email sent...`, result: result });
    })
    .catch((error) => res.status(400).json({ message: error }));
};
