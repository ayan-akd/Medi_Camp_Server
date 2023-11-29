var express = require("express");
var router = express.Router();
const postStripePayment = require("../../api/StripePayments/postStripePayment");
const verifyToken = require("../../middlewares/verifyToken");

router.post("/create-payment-intent", verifyToken, postStripePayment);

module.exports = router;
