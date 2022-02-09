const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storedOfflineData = new Schema({
  Date: { type: Date, required: true, trim: true },
  Time: { type: Date, required: true, trim: true },
  Length: { type: Number, required: true, trim: true },
  ['Vehicle number']: { type: String, required: true, trim: true },
});

const Identites = mongoose.model('Identites', storedOfflineData);

module.exports = Identites;
