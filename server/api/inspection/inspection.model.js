const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inspectionSchema = Schema({
  hive: {
    type: Schema.Types.ObjectId,
    ref: 'Hive',
  },
  _id: Number,
  name: String,
  date: Date,
  temperature: Number,
  traffic: String,
  beesCrawlingOnGround: Boolean,
  beesBringingPollen: Boolean,
  feederInPlace: Boolean,
  numberFramesSealedBrood: Number,
  numberFramesOpenBrood: Number,
  seeOpenDisease: Boolean,
  seeSmallLarvae: Boolean,
  seeOpenNectar: Boolean,
  totalFramesBees: Number,
  totalFramesBrood: Number,
  totalFramesHoney: Number,
  numberDeepBoxes: Number,
  numberMediumBoxes: Number,
  numberBadCombs: Number,
  seeQueen: Boolean,
  seeQueenCells: Boolean,
  seeDrones: Boolean,
  temperament: String,
  medicationsAdded: Boolean,
  medicationTypes: [],
  bottomBoard: String,
  comments: String,
  pictureLink: String,
  inspectionType: String,
  actionsTaken: String,
  actionsNeeded: String,
  nextInspectionDate: Date,
  queenRight: Boolean,
  beeDensity: String,
  foodStores: String,
  pests: String,
  diseases: String,
  humidity: String,
  weight: Number,
  honeyFramesHarvested: Number,
  broodFramesHarvested: Number,
});

const Inspection = mongoose.model('Inspection', inspectionSchema);

module.exports = Inspection;
