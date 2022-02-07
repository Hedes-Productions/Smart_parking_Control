const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const offlineUserSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    address: { type: String, required: true },
    cardName: { type: String, required: true, trim: true },
    cardNo: { type: Number, required: true, trim: true },
    expDate: { type: Date, required: true, trim: true },
    cvv: { type: Number, required: true, trim: true },
    userCategory: { type: String, required: true, trim: true },
    carParkingNum: { type: Number, required: true, trim: true },
  },
  { timestamps: true }
);

const OfflineUser = mongoose.model('OfflineUser', offlineUserSchema);

module.exports = OfflineUser;
