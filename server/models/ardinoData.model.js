const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const arduinoDataSchema = new Schema({
  date: { type: String, trim: true },
  time: { type: String, trim: true },
  length: { type: Number, trim: true },
  vehical_Number: { type: Number, trim: true },
  empty: { type: Boolean, trim: true },
});

const ArduinoData = mongoose.model('CarData', arduinoDataSchema);

module.exports = ArduinoData;
