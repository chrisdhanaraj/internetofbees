const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apiarySchema = Schema({
  _id     : Number,
  userId    : Number,
  name     : String,
  location : String,
  owner: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

const Apiary  = mongoose.model('Apiary', apiarySchema);

module.exports = Apiary;
