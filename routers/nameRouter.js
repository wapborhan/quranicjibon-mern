const { getName } = require("../controllers/nameController");

const router = require("express").Router();

router.get("/", getName);

module.exports = router;
