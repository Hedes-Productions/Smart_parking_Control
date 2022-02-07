const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const offlineParkingSlotSchema = new Schema(
  {
    slotNumber: { type: Number, trim: true },
    carParkingNum: { type: String, trim: true, default: 'Null' },
    empty: { type: Boolean, trim: true, default: true },
    length: { type: Number, trim: true },
  },
  { timestamps: true }
);

const OfflineCarParkingSlots = mongoose.model(
  'OfflineCarParkingSlots',
  offlineParkingSlotSchema
);

module.exports = OfflineCarParkingSlots;
