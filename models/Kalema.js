const mongoose = require("mongoose");

const kalemaSchema = mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  kalemaAr: {
    type: String,
  },
  kalemaBnU: {
    type: String,
  },
  kalemaBnA: {
    type: String,
  },
  kalemaEn: {
    type: String,
  },
  audio: {
    type: String,
  },
});

const Kalemas = mongoose.model("kalema", kalemaSchema);
module.exports = Kalemas;
