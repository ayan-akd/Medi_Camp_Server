var express = require("express");
var router = express.Router();
var addCamp = require("../../api/camps/addCamps");
router.post("/camps", addCamp);
module.exports = router;
