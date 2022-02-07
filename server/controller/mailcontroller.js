const nodeMailer = require('nodemailer');
require('dotenv').config({ path: '../.env' });
const { google } = require('googleapis');
const { emailTemplate } = require('../template/emailTemplate');
require('dotenv').config({ path: '../.env' });

exports.sendMail = async (email, oAuth2Client, userId) => {
  console.log(userId + '1');
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodeMailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    console.log('send mail working');
    const mailOptions = {
      from: 'xCodeX <xcodexprojects@gmail.com>',
      to: email,
      subject: 'Hello from gmail using API',
      text: `http://localhost:3000/pricing?userId=${userId}`,
      html: emailTemplate(userId),
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};
