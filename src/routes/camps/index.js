var express = require("express");
var router = express.Router();
var addCamp = require("../../api/camps/addCamps");
var getCamps = require("../../api/camps/getCamps");

router.post("/camps", addCamp);
router.get("/camps", getCamps);
module.exports = router;
