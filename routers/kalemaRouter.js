const { getKalema } = require("../controllers/kalemaController");

const router = require("express").Router();

router.get("/", getKalema);

module.exports = router;
