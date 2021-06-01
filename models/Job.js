var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
  from: String,	// code applied to the job
  comname: String,	// company name
  comaddress: String,	// company address
  contact: String,	// contact name
  phone: String,	// contact phone number
  notes1: String,	// general notes
  notes2: String,	// general notes
  wipe: String,	// wipe requirement
  lcd: String,	// include exclude connected screens
  colldatetime: String,	// when is the collection data and time
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', JobSchema);
