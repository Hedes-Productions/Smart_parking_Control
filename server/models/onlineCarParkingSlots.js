const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const onlineParkingSlotSchema = new Schema(
  {
    slotNumber: { type: Number, trim: true },
    empty: { type: Boolean, trim: true, default: true },
  },
  { timestamps: true }
);

const OnlineCarParkingSlots = mongoose.model(
  'OnlineCarParkingSlots',
  onlineParkingSlotSchema
);

module.exports = OnlineCarParkingSlots;
