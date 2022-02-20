const User = require('../models/user.model');

exports.getUserDataById = (req, res) => {
  const id = req.params.id;
  User.findById(id).exec((error, data) => {
    if (error) {
      return res.status(400).json({ message: error });
    } else if (data) {
      res.status(200).json({ userData: data });
    }
  });
  //   User.findOne({ _id: req.param }).exec((error, data) => {
  //     if (error) {
  //       return res.status(400).json({ message: error });
  //     } else if (data) {
  //       const userId = data._id;
  //       req.user = { ...req.user, userId: userId };
  //       console.log(userId + 'its me');
  //       next();
  //     }
  //   });
};
