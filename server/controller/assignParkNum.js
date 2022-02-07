// const OfflineCarParkingSlots = require('../models/offlineCarParkingSlots');

// exports.assignParkNum = (req, res) => {
//   console.log('fdfd');
//   OfflineCarParkingSlots.findOne({
//     empty: true,
//     length: { $gt: res.userAllData.userParkingData.Length },
//   }).exec((error, data) => {
//     if (error) {
//       res.status(400).json({ message: error });
//     } else if (data) {
//       console.log(data);
//     }
//   });
// };
