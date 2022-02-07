const User = require('../models/user.model');

exports.getUserId = (req, res, next) => {
  User.findOne({ email: req.user.email }).exec((error, data) => {
    if (error) {
      return res.status(400).json({ message: error });
    } else if (data) {
      const userId = data._id;
      req.user = { ...req.user, userId: userId };
      console.log(userId + 'its me');
      next();
    }
  });
};
