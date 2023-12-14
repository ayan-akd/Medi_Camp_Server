var express = require("express");
var router = express.Router();
var postGrowingLists = require("../../api/GrowingLists/postGrowingLists");
var getGrowingListsByEmail = require("../../api/GrowingLists/getGrowingListsByEmail");
var getGrowingListById = require("../../api/GrowingLists/getGrowingListsById");
var deleteGrowingList = require("../../api/GrowingLists/deleteGrowingLists");
var updateGrowingList = require("../../api/GrowingLists/updateGrowingLists");
var getGrowingList = require("../../api/GrowingLists/getGrowingList");
const verifyToken = require("../../middlewares/verifyToken");

router.get("/growingLists", getGrowingList);
router.get("/growingList", getGrowingListsByEmail);
router.get("/growingList/:id", getGrowingListById);
router.post("/growingList", verifyToken, postGrowingLists);
router.put("/growingList/:id",verifyToken, updateGrowingList);
router.delete("/growingList/:id",verifyToken, deleteGrowingList);

module.exports = router;
