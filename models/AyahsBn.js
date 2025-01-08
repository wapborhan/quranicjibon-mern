const mongoose = require("mongoose");

const ayahsBnSchema = mongoose.Schema({
  id: {
    type: String,
  },
  sura_id: {
    type: String,
  },
  ayah_id: {
    type: String,
  },
  text: {
    type: String,
  },
});

const AyahsBn = mongoose.model("bn_ayahs", ayahsBnSchema);
module.exports = AyahsBn;
