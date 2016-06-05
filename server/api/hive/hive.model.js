const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hiveSchema = Schema({
  _id     : Number,
  name    : String,
  age     : Number,
  apiary : [
    {
      type: Schema.Types.ObjectId,
      ref: 'Apiary'
    }
  ]
});

const Hive  = mongoose.model('Hive', hiveSchema);
