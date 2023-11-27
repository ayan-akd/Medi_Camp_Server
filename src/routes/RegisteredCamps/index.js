var express = require("express");
var router = express.Router();
var postRegisteredCamps = require("../../api/registeredCamps/postRegisteredCamps");
var getRegisteredCampsByEmail = require("../../api/registeredCamps/getRegisteredCampsByEmail");

router.post("/registeredCamps", postRegisteredCamps);
router.get("/registeredCamps", getRegisteredCampsByEmail);
module.exports = router;