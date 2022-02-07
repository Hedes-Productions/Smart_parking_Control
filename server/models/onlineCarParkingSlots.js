const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const onlineParkingSlotSchema = new Schema(
  {
    slotNumber: { type: Number, trim: true },
    userId: { type: String, trim: true, default: 'Null' },
    empty: { type: Boolean, trim: true, default: true },
  },
  { timestamps: true }
);

const OnlineParkingSlot = mongoose.model(
  'OnlineCarParkingSlots',
  onlineParkingSlotSchema
);

module.exports = OnlineParkingSlot;
