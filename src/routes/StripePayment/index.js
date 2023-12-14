var express = require("express");
var router = express.Router();
const postStripePayment = require("../../api/StripePayments/postStripePayment");
const sendEmail = require("../../api/StripePayments/sendEmail");
const verifyToken = require("../../middlewares/verifyToken");

router.post("/create-payment-intent", verifyToken, postStripePayment);
router.post("/send-email", verifyToken, sendEmail);

module.exports = router;
