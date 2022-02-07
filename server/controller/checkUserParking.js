const User = require('../models/user.model');

exports.checkUserParking = (req, res, next) => {
  const id = req.params.id;
  User.findById(id).exec((error, data) => {
    if (error) {
      console.log('1_1');
      return res.status(400).json({ message: error });
    } else if (data) {
      if (!data.carParkingNum) {
        req.userDataCopy = data;
        console.log('1_2');
        next();
      } else {
        console.log('1_3');
        res.status(200).json({ userData: data });
      }
    }
  });
};

//stopped from here.optimization needed
