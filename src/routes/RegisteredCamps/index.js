var express = require("express");
var router = express.Router();
var postRegisteredCamps = require("../../api/registeredCamps/postRegisteredCamps");
var getRegisteredCampsByEmail = require("../../api/registeredCamps/getRegisteredCampsByEmail");
const getRegisteredCamps = require("../../api/registeredCamps/getRegisteredCamps");

router.post("/registeredCamps", postRegisteredCamps);
router.get("/registeredCamps", getRegisteredCampsByEmail);
router.get("/registeredCamp", getRegisteredCamps);
module.exports = router;