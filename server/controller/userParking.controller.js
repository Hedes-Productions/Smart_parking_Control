const Identites = require('../models/storedOfflineCarData.model');
const User = require('../models/user.model');
const ObjectId = require('mongodb').ObjectId;

exports.getParkingDataById = (req, res, next) => {
  const id = req.params.id;
  User.findById(ObjectId(id)).exec((error, userData) => {
    if (error) {
      res.status(400).json({ message: error });
    } else if (userData) {
      // console.log(userData);
      res.userAllData = { userData };
      if (res.userAllData.userData.userCategory === 'Offline') {
        Identites.findOne({ ['Vehicle number']: userData.carNumPlate }).exec(
          (error, userParkingData) => {
            if (error) {
              res.status(400).json({ error: error });
            } else if (userParkingData) {
              res.userAllData = { ...res.userAllData, userParkingData };
              // res.userAllData = { userParkingData };
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
  if (res.userAllData.userData.userCategory === 'Offline') {
    OfflineCarParkingSlots.findOne({
      empty: true,
      length: { $gte: res.userAllData.userParkingData.Length + 2 },
    }).exec((error, data) => {
      if (error) {
        res.status(400).json({ message: error });
      } else if (data) {
        const parkingLotNum = data.slotNumber;
        res.userAllData.userParkingData = {
          ...res.userAllData.userParkingData.toJSON(),
          parkingLotNum,
        };
        res.userAllData.userData.parkingLotNum = parkingLotNum;
        OfflineCarParkingSlots.updateOne(
          { slotNumber: data.slotNumber },
          { empty: false }
        ).exec((error, data) => {
          if (error) {
            res.status(400).json({ message: 'Something went wrong' });
          } else if (data) {
            console.log('OfflineWorkingUpdated');
            next();
          }
        });
      }
    });
  } else if (res.userAllData.userData.userCategory === 'Online') {
    OnlineCarParkingSlots.findOne({ empty: true }).exec((error, data) => {
      if (error) {
        res.status(400).json({ message: error });
      } else if (data) {
        const parkingLotNum = data.slotNumber;
        res.userAllData.userData.parkingLotNum = parkingLotNum;
        OnlineCarParkingSlots.updateOne(
          { slotNumber: data.slotNumber },
          { empty: false }
        ).exec((error, data) => {
          if (error) {
            res.status(400).json({ message: 'Something went wrong' });
          } else if (data) {
            console.log('OnlineWorkingUpdated');
            next();
          }
        });
      }
    });
  } else {
    res.status(400).json({ message: 'User category is not found' });
  }
};

exports.setParkingLotNumber = (req, res, next) => {
  const userId = res.userAllData.userData._id;
  // const carNumPlate = res.userAllData.userParkingData['Vehicle number'];
  User.updateOne(
    { _id: userId },
    { $set: { parkingLotNum: res.userAllData.userData.parkingLotNum } }
  ).exec((error, userData) => {
    if (error) {
      res.status(400).json({ message: error });
    } else if (userData) {
      if (userData.matchedCount === 0) {
        res.status(400).json({ message: 'User not found' });
      }

      // const parkingLotNumber = res.userAllData.userParkingData.parkingLotNum;
      // res.userAllData.userData.parkingLotNum = parkingLotNumber;
      res.status(200).json(res.userAllData.userData);
    }
  });
};
