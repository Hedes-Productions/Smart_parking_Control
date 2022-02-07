const CarData = require('../models/carData.model');

exports.addCarData = (req, res) => {
  CarData.findOne({ userId: req.body.userId }).exec((carData, error) => {
    if (carData) {
      res.status(400).json({ message: 'Car exists already' });
    }
    const { userId } = user._id;
    const { parkNo, time } = req.body;

    const newParkedCar = new CarData(userId, parkNo, time);

    newParkedCar.save((error, data) => {
      if (error) {
        res.status(400).json({ message: 'Somethings wrong' });
      }
      if (data) {
        res.status(201).json({ message: data });
      }
    });
  });
};

exports.getAllCarData = (req, res) => {
  CarData.find({}).exec((error, allData) => {
    if (error) {
      res.status(400).json({ message: error });
    }
    if (allData) {
      res.status(200).json({ allData });
    }
  });
};

exports.getDataUserId = (req, res) => {
  const userId = req.params.userId;
  if (userId.match(/^[0-9a-fA-F]{24}$/)) {
    CarData.findOne({ userId: userId }).exec((error, data) => {
      if (error) {
        res.status(400).json({ message: error.message });
      }
      if (!data) {
        res.status(400).json({ message: 'User not found' });
      }
      res.status(200).json({ data: data });
    });
  } else {
    res.status(400).json({ message: 'Invalid param' });
  }
};
