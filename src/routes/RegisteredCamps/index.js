var express = require("express");
var router = express.Router();
var postRegisteredCamps = require("../../api/registeredCamps/postRegisteredCamps");

router.post("/registeredCamps", postRegisteredCamps);
module.exports = router;