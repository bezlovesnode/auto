var mongoose = require('mongoose');

var HardSchema = new mongoose.Schema({
  product: String,
  serial: String,
  size: String,
  progress: String, // start complete
  from: String,
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Hard', HardSchema);
