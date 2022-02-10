const Identites = require('../models/storedOfflineCarData.model');
const User = require('../models/user.model');
const ObjectId = require('mongodb').ObjectId;

exports.getParkingDataById = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  User.findById(ObjectId(id)).exec((error, userData) => {
    if (error) {
      res.status(400).json({ message: error });
    } else if (userData) {
      console.log('data');
      // console.log(userData);
      res.userAllData = { userData };
      if (res.userAllData.userData.userCategory === 'Offline') {
        console.log(res.userAllData.userData.userCategory);
        Identites.findOne({ ['Vehicle number']: userData.carNumPlate }).exec(
          (error, userParkingData) => {
            if (error) {
              res.status(400).json({ error: error });
            } else if (userParkingData) {
              console.log(res.userAllData);
              res.userAllData = { ...res.userAllData, userParkingData };
              // res.userAllData = { userParkingData };
              console.log(res.userAllData);
              console.log('tt');
              // res.status(200).json(res.userAllData);
              next();
            }
          }
        );
      } else if (res.userAllData.userData.userCategory === 'Online') {
        next();
      } else {
        res.status(400).json({ message: 'User category is not found' });
      }
    }
  });
};

// exports.searchUserDataByNum = (req, res, next) => {
//   const parkingData = res.userAllData.userParkingData.toJSON();
//   User.findOne({ carNumPlate: parkingData['Vehicle number'] }).exec(
//     (error, userData) => {
//       if (error) {
//         res.status(400).json({ message: error });
//       } else if (userData) {
//         console.log('ss');
//         console.log(userData);
//         res.userAllData.userData = userData;
//         // res.status(200).json(res.userAllData);
//         next();
//       }
//     }
//   );
// };

const OfflineCarParkingSlots = require('../models/offlineCarParkingSlots');
const OnlineCarParkingSlots = require('../models/onlineCarParkingSlots');

exports.selectParkOffline = (req, res, next) => {
  console.log(res.userAllData.userData.userCategory);
  console.log(typeof res.userAllData.userData.userCategory);
  if (res.userAllData.userData.userCategory === 'Offline') {
    OfflineCarParkingSlots.findOne({
      empty: true,
      length: { $gte: res.userAllData.userParkingData.Length + 2 },
    }).exec((error, data) => {
      if (error) {
        res.status(400).json({ message: error });
      } else if (data) {
        console.log(data.slotNumber);
        const parkingLotNum = data.slotNumber;
        res.userAllData.userParkingData = {
          ...res.userAllData.userParkingData.toJSON(),
          parkingLotNum,
        };
        res.userAllData.userData.parkingLotNum = parkingLotNum;
        next();
      }
    });
  } else if (res.userAllData.userData.userCategory === 'Online') {
    console.log('aaa');
    OnlineCarParkingSlots.findOne({ empty: true }).exec((error, data) => {
      console.log('bbb');
      if (error) {
        console.log('ccc');
        res.status(400).json({ message: error });
      } else if (data) {
        console.log('ddd');
        const parkingLotNum = data.slotNumber;
        console.log(res.userAllData);
        res.userAllData.userData.parkingLotNum = parkingLotNum;
        console.log(res.userAllData);
        console.log('sdasd');
      }
      console.log('eee');
      console.log(data);
      next();
    });
  } else {
    res.status(400).json({ message: 'User category is not found' });
  }
};

exports.setParkingLotNumber = (req, res, next) => {
  const userId = res.userAllData.userData._id;
  console.log(userId);
  console.log('setParkingLotNumber-1');
  console.log(res.userAllData.userData.parkingLotNum);
  // const carNumPlate = res.userAllData.userParkingData['Vehicle number'];
  User.updateOne(
    { _id: userId },
    { $set: { parkingLotNum: res.userAllData.userData.parkingLotNum } }
  ).exec((error, userData) => {
    console.log('mmm');
    if (error) {
      res.status(400).json({ message: error });
    } else if (userData) {
      console.log('hhh');
      if (userData.matchedCount === 0) {
        res.status(400).json({ message: 'User not found' });
      }

      // const parkingLotNumber = res.userAllData.userParkingData.parkingLotNum;
      // res.userAllData.userData.parkingLotNum = parkingLotNumber;
      console.log(res.userAllData.userData);
      res.status(200).json(res.userAllData.userData);
    }
  });
};
