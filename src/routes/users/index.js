var express = require("express");
var router = express.Router();
const addUsers = require("../../api/users/addUsers");
const getUserByEmail = require("../../api/users/getUserByEmail");
const updateUSer = require("../../api/users/updateUser");

router.get("/users", getUserByEmail);
router.post("/users", addUsers);
router.put("/users/:id", updateUSer);

module.exports = router;
