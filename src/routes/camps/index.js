var express = require("express");
var router = express.Router();
var addCamp = require("../../api/camps/addCamps");
var getCamps = require("../../api/camps/getCamps");
var getCampById = require("../../api/camps/getCampById");
var updateCampParticipants = require("../../api/camps/updateCampParticipant");
var updateCamp = require("../../api/camps/updateCamp");
const deleteCamp = require("../../api/camps/deleteCamp");
const verifyToken = require("../../middlewares/verifyToken");

router.post("/camps", verifyToken, addCamp);
router.get("/camps", getCamps);
router.get("/camps/:id", getCampById);
router.put("/camps/:id", verifyToken, updateCampParticipants);
router.put("/camp/:id", verifyToken, updateCamp);
router.delete("/camp/:id", verifyToken, deleteCamp);

module.exports = router;
