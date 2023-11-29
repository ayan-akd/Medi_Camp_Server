var express = require("express");
var router = express.Router();
var postRegisteredCamps = require("../../api/registeredCamps/postRegisteredCamps");
var getRegisteredCampsByEmail = require("../../api/registeredCamps/getRegisteredCampsByEmail");
const getRegisteredCamps = require("../../api/registeredCamps/getRegisteredCamps");
const deleteRegisteredCamp = require("../../api/registeredCamps/deleteRegisteredCamp");
const updateRegisteredCamps = require("../../api/registeredCamps/updateRegisteredCamp");
const verifyToken = require("../../middlewares/verifyToken");

router.post("/registeredCamps", verifyToken, postRegisteredCamps);
router.get("/registeredCamps", getRegisteredCampsByEmail);
router.get("/registeredCamp", getRegisteredCamps);
router.delete("/registeredCamps/:id", verifyToken, deleteRegisteredCamp);
router.put("/registeredCamp/:id", verifyToken, updateRegisteredCamps);
module.exports = router;
