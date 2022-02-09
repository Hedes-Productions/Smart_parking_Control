const Identites = require('../models/storedOfflineCarData.model');
const User = require('../models/user.model');
const ObjectId = require('mongodb').ObjectId;

exports.getParkingDataById = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  User.findById(ObjectId(id)).exec((error, data) => {
    if (error) {
      res.status(400).json({ message: error });
    } else if (data) {
      console.log('data');
      console.log(data);
      Identites.findOne({ ['Vehicle number']: data.carNumPlate }).exec(
        (error, userParkingData) => {
          if (error) {
            res.status(400).json({ error: error });
          } else if (userParkingData) {
            res.userAllData = { userParkingData };
            console.log(res.userAllData);
            console.log('tt');
            next();
          }
        }
      );
    }
  });
};

exports.searchUserDataByNum = (req, res, next) => {
  const parkingData = res.userAllData.userParkingData.toJSON();
  User.findOne({ carNumPlate: parkingData['Vehicle number'] }).exec(
    (error, userData) => {
      if (error) {
        res.status(400).json({ message: error });
      } else if (userData) {
        console.log('ss');
        console.log(userData);
        res.userAllData.userData = userData;
        next();
      }
    }
  );
};

const OfflineCarParkingSlots = require('../models/offlineCarParkingSlots');

exports.selectParkOffline = (req, res, next) => {
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

      next();
    }
  });
};

exports.setParkingLotNumber = (req, res, next) => {
  console.log(res.userAllData.userParkingData);
  const carNumPlate = res.userAllData.userParkingData['Vehicle number'];
  User.updateOne(
    { carNumPlate: carNumPlate },
    { $set: { parkingLotNum: res.userAllData.userParkingData.parkingLotNum } }
  ).exec((error, userData) => {
    if (error) {
      res.status(400).json({ message: error });
    } else if (userData) {
      if (userData.matchedCount === 0) {
        res.status(400).json({ message: 'User not found' });
      }

      const parkingLotNumber = res.userAllData.userParkingData.parkingLotNum;
      res.userAllData.userData.parkingLotNum = parkingLotNumber;
      console.log(res.userAllData.userData);
      res.status(200).json(res.userAllData.userData);
    }
  });
};
