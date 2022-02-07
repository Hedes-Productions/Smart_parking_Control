const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carDataSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  parkNo: { type: Number, required: true, trim: true },
  time: { type: Date, required: true, trim: true },
});

const CarData = mongoose.model('CarData', carDataSchema);

module.exports = CarData;
