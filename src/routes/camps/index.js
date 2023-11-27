var express = require("express");
var router = express.Router();
var addCamp = require("../../api/camps/addCamps");
var getCamps = require("../../api/camps/getCamps");
var getCampById = require("../../api/camps/getCampById");
var updateCampParticipants = require("../../api/camps/updateCampParticipant");
var updateCamp = require("../../api/camps/updateCamp");
const deleteCamp = require("../../api/camps/deleteCamp");


router.post("/camps", addCamp);
router.get("/camps", getCamps);
router.get("/camps/:id", getCampById);
router.put("/camps/:id", updateCampParticipants);
router.put("/camp/:id", updateCamp);
router.delete("/camp/:id", deleteCamp);

module.exports = router;
