var express = require("express");
var router = express.Router();
var addCamp = require("../../api/camps/addCamps");
var getCamps = require("../../api/camps/getCamps");
var getCampById = require("../../api/camps/getCampById");
var updateCampParticipants = require("../../api/camps/updateCampParticipant");

router.post("/camps", addCamp);
router.get("/camps", getCamps);
router.get("/camps/:id", getCampById);
router.put("/camps/:id", updateCampParticipants);


module.exports = router;
