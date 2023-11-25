var express = require("express");
var router = express.Router();
var addUsers = require("../../api/users/addUsers");
var getUserByEmail = require("../../api/users/getUserByEmail");

router.get("/users", getUserByEmail);
router.post("/users", addUsers);

module.exports = router;
