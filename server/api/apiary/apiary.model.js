const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apiarySchema = Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  zipCode: String,
  lat: Number,
  long: Number,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Apiary = mongoose.model('Apiary', apiarySchema);

module.exports = Apiary;
