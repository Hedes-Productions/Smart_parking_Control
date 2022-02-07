const Identites = require('../models/storedOfflineCarData.model');

exports.getAllParkingData = (req, res) => {
  Identites.find({}).exec((error, data) => {
    if (error) {
      res.status(400).json({ message: error });
    } else if (data) {
      res.status(200).json({ data: data });
    }
  });
};
