const { Schema, model } = require("mongoose");

const stripePaymentSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    clientSecret: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  {
    collection: "stripePayments",
  }
);

const stripePayment = model("stripePayments", stripePaymentSchema);
module.exports = stripePayment;
