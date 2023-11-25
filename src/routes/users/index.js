var express = require("express");
var router = express.Router();
var addUsers = require("../../api/users/addUsers");
var getUsers = require("../../api/users/getUsers");
router.get("/users", getUsers);
router.post("/users", addUsers);
module.exports = router;