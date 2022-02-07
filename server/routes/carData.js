const {
  addCarData,
  getAllCarData,
  getDataUserId,
} = require('../controller/carData.controller');
const express = require('express');
const User = require('../models/user.model');
const { verifyUser } = require('../middleware/verifyUser');
const { signIn } = require('../controller/user.controller');
const router = express.Router();

router.post('/addCar', signIn, addCarData);
router.get('/getAllCars', getAllCarData);
router.get('/:userId', verifyUser, getDataUserId);

module.exports = router;
