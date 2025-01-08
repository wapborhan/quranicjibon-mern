const mongoose = require("mongoose");

const surasSchema = mongoose.Schema({
  index: {
    type: String,
  },
  ayas: {
    type: String,
  },
  name: {
    type: String,
  },
  name_en: {
    type: String,
  },
  name_bn: {
    type: String,
  },
  meaning: {
    type: String,
  },
  meaning_bn: {
    type: String,
  },
  type: {
    type: String,
  },
});

const Suras = mongoose.model("suras", surasSchema);
module.exports = Suras;
