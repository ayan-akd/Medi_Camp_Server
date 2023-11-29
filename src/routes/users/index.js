var express = require("express");
var router = express.Router();
const addUsers = require("../../api/users/addUsers");
const getUserByEmail = require("../../api/users/getUserByEmail");
const updateUSer = require("../../api/users/updateUser");
const verifyToken = require("../../middlewares/verifyToken");

router.get("/users", getUserByEmail);
router.post("/users", addUsers);
router.put("/users/:id", verifyToken, updateUSer);

module.exports = router;
