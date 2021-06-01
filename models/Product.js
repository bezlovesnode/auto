var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  brand: String,
  product: String,
  version: String,
  serial: String,
  processor: String,
  ramtotal: String,
  harddrive: String,
  location: String,
  from: String,
  idcode: String,
  notes: String,
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);
