const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 60,
  },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: value => value >= 5000.5,
  },
});

module.exports = mongoose.model('Student', studentSchema);
