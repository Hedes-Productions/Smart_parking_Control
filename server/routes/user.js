const router = require('express').Router();
const {
  registerOnlineUser,
  getAllUsers,
  registerOfflineUser,
} = require('../controller/user.controller');
const { sendEmailToUser } = require('../controller/sendEmailtoUser');
const { getUserId } = require('../controller/getUserId');
const { getUserDataById } = require('../controller/getUserDataById');
const { checkUserParking } = require('../controller/checkUserParking');
const { getDataFromArduino } = require('../controller/getDataFromArduino');
const { chooseParkNum } = require('../controller/chooseParkNum');
const { assignParkNum } = require('../controller/assignParkNum');
const { assignUserTime } = require('../controller/assignUserTime');
const { getAllParkingData } = require('../controller/getAllParkingData');
const {
  getParkingDataById,
  searchUserDataByNum,
  selectParkOffline,
  setParkingLotNumber,
} = require('../controller/userParking.controller');

// const { registerOfflineUser } = require('../controller/registerOfflineUser');

router.post('/registerOnline', registerOnlineUser, getUserId, sendEmailToUser);
router.post(
  '/registerOffline',
  registerOfflineUser,
  getUserId,
  sendEmailToUser
);
router.get('/getAllusers', getAllUsers);
router.get('/userDataById/:id', getUserDataById);
router.get(
  '/chooseParkingNum/:id',
  checkUserParking,
  // getDataFromArduino,
  chooseParkNum
);
router.get('/getAllParkingLots', getAllParkingData);

router.get(
  '/getParkingLotsByNum/:id',
  getParkingDataById,
  searchUserDataByNum,
  selectParkOffline,
  setParkingLotNumber
);

module.exports = router;
