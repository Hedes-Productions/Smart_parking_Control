const Users = require('../models/user.model');

exports.getParkingDataByIdOnline = (req, res, next) => {
  const userId = req.params.id;

  Users.findById(userId).exec((error, userData) => {
    if (error) {
      res.status(400).json({ message: error });
    } else if (userData) {
      res.userAllData.userData = userData;
      next();
    }
  });
};
