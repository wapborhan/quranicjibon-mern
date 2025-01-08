const {
  getSuras,
  getSingleSura,
  getSingleSuraAyahs,
} = require("../controllers/quranController");

const router = require("express").Router();

router
  .get("/suras", getSuras)
  .get("/sura/:id", getSingleSura)
  .get("/sura/ayahs/:id", getSingleSuraAyahs);

module.exports = router;
