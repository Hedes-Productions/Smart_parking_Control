const { request } = require('gaxios');
const User = require('../models/user.model');
// const jwt = require('jsonwebtoken');
require('dotenv').config('../.env');
const OfflineUser = require('../models/offlineUser.model');

exports.registerOfflineUser = (req, res, next) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) {
      return res.status(400).json({ message: error });
    } else if (user)
      return res.status(400).json({
        message: 'User already exists',
      });
    const {
      fullName,
      email,
      address,
      cardName,
      cardNo,
      expDate,
      cvv,
      carNumPlate,
    } = req.body;
    const userCategory = 'Offline';
    const newUser = new User({
      fullName,
      email,
      address,
      cardName,
      cardNo,
      expDate,
      cvv,
      carNumPlate,
      userCategory,
    });

    newUser.save((error, data) => {
      if (error) {
        return res.status(400).json({ message: error });
      } else if (data) {
        req.user = { userId: null, email: email };
      }
      next();
    });
  });
};

exports.registerOnlineUser = (req, res, next) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) {
      return res.status(400).json({ message: error });
    } else if (user) {
      return res.status(400).json({
        message: 'User already exists',
      });
    }
    const { fullName, email, address, cardName, cardNo, expDate, cvv } =
      req.body;
    const userCategory = 'Online';
    const newUser = new User({
      fullName,
      email,
      address,
      cardName,
      cardNo,
      expDate,
      cvv,
      userCategory,
    });
    newUser.save((error, data) => {
      if (error) {
        return res.status(400).json({
          message: error,
        });
      } else if (data) {
        req.user = { userId: null, email: email };
      }
      next();
    });
    // const token = jwt.sign({ email: newUser.email }, process.env.SECRET_KEY, {
    //   expiresIn: '2000',
    // });

    // user.token = token;
  });
};

exports.getAllUsers = (req, res) => {
  User.find({}).exec((error, allData) => {
    if (error) {
      res.status(400).json({ message: error });
    }
    if (allData) {
      res.status(200).json({ carDatas: allData });
    }
  });
};

exports.signIn = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ message: 'Please enter email' });
  }
  const user = User.findOne({ email }).exec((userData, error) => {
    if (error) {
      res.status(400).json({ message: error });
    }
    if (userData) {
      const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, {
        expiresIn: '3000',
      });
      user.token = token;
    }

    res.status(200).json(user);
  });

  next();
};
