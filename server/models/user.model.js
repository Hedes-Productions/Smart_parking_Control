const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    address: { type: String, required: true },
    cardName: { type: String, required: true, trim: true },
    cardNo: { type: Number, required: true, trim: true },
    expDate: { type: Date, required: true, trim: true },
    cvv: { type: Number, required: true, trim: true },
    userCategory: { type: String, required: true, trim: true },
    carNumPlate: { type: String, trim: true },
    parkingLotNum: { type: Number, trim: true }, // newly added check later
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
