var express = require("express");
var router = express.Router();
const addUpcomingCamps = require("../../api/upcomingCamps/addUpcomingCamps");
const getUpcomingCamps = require("../../api/upcomingCamps/getUpcomingCamps");
const getUpcomingCampsById = require("../../api/upcomingCamps/getUpcomingCampsById");
const updateUpcomingCamp = require("../../api/upcomingCamps/updateUpcomingCamp");
const getUpcomingCampsByEmail = require("../../api/upcomingCamps/getUpcomingCampsByEmail");
const deleteUpcomingCamp = require("../../api/upcomingCamps/deleteUpcomingCamp");
const verifyToken = require("../../middlewares/verifyToken");

router.get("/upcomingCamps", getUpcomingCamps);
router.get("/upcomingCamps/:id", getUpcomingCampsById);
router.get("/upcomingCampsByEmail", getUpcomingCampsByEmail);
router.post("/upcomingCamps", verifyToken, addUpcomingCamps);
router.put("/upcomingCamps/:id", verifyToken, updateUpcomingCamp);
router.delete("/upcomingCamps/:id", verifyToken, deleteUpcomingCamp);

module.exports = router;
