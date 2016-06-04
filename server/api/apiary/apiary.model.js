const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apiarySchema = Schema({
  _id     : Number,
  userId    : Number,
  name     : String,
  location : String,
  hives: [
    {
      type: Schema.Types.ObjectId, ref: 'Hive'
    }
  ]
});

const Apiary  = mongoose.model('Apiary', apiarySchema);

module.exports = Apiary;
