const mongoose = require("mongoose");

const ayahsArSchema = mongoose.Schema({
  id: {
    type: String,
  },
  sura_id: {
    type: String,
  },
  ayah_id: {
    type: String,
  },
  para: {
    type: String,
  },
  hijb: {
    type: String,
  },
  page: {
    type: String,
  },
  uthmani: {
    type: String,
  },
  clean: {
    type: String,
  },
  qcf: {
    type: String,
  },
});

const AyahsAr = mongoose.model("ar_ayahs", ayahsArSchema);
module.exports = AyahsAr;
