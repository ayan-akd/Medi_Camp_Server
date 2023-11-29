var express = require("express");
var router = express.Router();
const addUpcomingCamps = require("../../api/upcomingCamps/addUpcomingCamps");
const getUpcomingCamps = require("../../api/upcomingCamps/getUpcomingCamps");
const getUpcomingCampsById = require("../../api/upcomingCamps/getUpcomingCampsById");
const verifyToken = require("../../middlewares/verifyToken");

router.post("/upcomingCamps", verifyToken, addUpcomingCamps);
router.get("/upcomingCamps", getUpcomingCamps);
router.get("/upcomingCamps/:id", getUpcomingCampsById);

module.exports = router;
