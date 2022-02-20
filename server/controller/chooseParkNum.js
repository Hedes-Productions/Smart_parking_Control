const OnlineParkingSlot = require('../models/onlineCarParkingSlots');

exports.chooseParkNum = (req, res) => {
  req.parkingSlot = 2;
  OnlineParkingSlot.findOneAndUpdate({ empty: true }, { empty: false }).exec(
    (error, data) => {
      if (!data) {
        return res.status(200).json({ message: 'No slots for you' });
      } else if (error) {
        return res.status(400).json({ message: error });
      } else {
        data.userId = req.params.id;
        return res.status.json({ message: data });
        // let { _id, slotNumber, userId, empty } = data;
        // return res.status(200).json({ message: data });
      }
    }
  );
};

// emptyStatus = true;
// const newParkingData = new OnlineParkingSlot({
//   slotNum,
//   userNum,
//   emptyStatus,
// });
// newParkingData.save((error, data) => {
// if (error) {
//   return res.status(400).json({
//     message: error,
//   });
// } else if (data) {
// }
// next();
// });
