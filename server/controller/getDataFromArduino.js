exports.getDataFromArduino = (req, res, next) => {
  res.status(200).json({ message: req.userDataCopy });
  ArduinoData.findOne
  next();
};
