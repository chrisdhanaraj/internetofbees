var iob = require('mongoose')
  , Schema = iob.Schema
  
var apiarySchema = Schema({
  _id     : Number,
  userId    : Number,
  name     : String,
  location : String,
  hives : [{ type: Schema.Types.ObjectId, ref: 'Hive' }]
});

var Apiary  = mongoose.model('Apiary', apiarySchema);
