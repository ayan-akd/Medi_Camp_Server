var express = require("express");
var router = express.Router();
var postRegisteredCamps = require("../../api/registeredCamps/postRegisteredCamps");
var getRegisteredCampsByEmail = require("../../api/registeredCamps/getRegisteredCampsByEmail");
const getRegisteredCamps = require("../../api/registeredCamps/getRegisteredCamps");
const deleteRegisteredCamp = require("../../api/registeredCamps/deleteRegisteredCamp");
const updateRegisteredCamps = require("../../api/registeredCamps/updateRegisteredCamp");

router.post("/registeredCamps", postRegisteredCamps);
router.get("/registeredCamps", getRegisteredCampsByEmail);
router.get("/registeredCamp", getRegisteredCamps);
router.delete("/registeredCamps/:id", deleteRegisteredCamp);
router.put("/registeredCamp/:id", updateRegisteredCamps);
module.exports = router;
