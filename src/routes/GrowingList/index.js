var express = require("express");
var router = express.Router();
var postGrowingLists = require("../../api/GrowingLists/postGrowingLists");
const verifyToken = require("../../middlewares/verifyToken");

router.post("/growingList", verifyToken, postGrowingLists);

module.exports = router;
