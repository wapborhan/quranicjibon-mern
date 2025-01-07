const mongoose = require("mongoose");

const nameSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  name_ar: {
    type: String,
  },
  name_bn: {
    type: String,
  },
  meaning_bn: {
    type: String,
  },
  path: {
    type: String,
  },
  fojilot: {
    type: String,
  },
});

const Names = mongoose.model("allah_name", nameSchema);
module.exports = Names;
