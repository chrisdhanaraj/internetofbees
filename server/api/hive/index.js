var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var hiveSchema = Schema({
  _id     : Number,
  name    : String,
  age     : Number,
  beepeker : [
    { type: Schema.Types.ObjectId, ref: 'Beekeper' }
  ]
});

var Hive  = mongoose.model('Hive', hiveSchema);
