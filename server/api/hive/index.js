var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var hiveSchema = Schema({
  _id     : Number,
  name    : String,
  age     : Number,
  apiary : [
    { type: Schema.Types.ObjectId, ref: 'Apiary' }
  ]
});

var Hive  = mongoose.model('Hive', hiveSchema);
