const jwt = require('jsonwebtoken');

require('dotenv').config('../.env');

exports.verifyUser = (req, res, next) => {
  const token = req.headers['Authorization'].split(' ')[1];

  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }
  try {
    const tokenData = jwt.verify(token, process.env.SECRET_KEY);
    console.log(tokenData);
    req.user = tokenData;
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
  next();
};

// module.exports = verifyUser;
