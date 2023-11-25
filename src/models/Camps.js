const { Schema, model } = require("mongoose");

const campSchema = new Schema(
  {
    campName: {
      type: String,
      required: true,
    },
    targetAudience: {
      type: String,
      required: true,
    },
    services: {
      type: String,
      required: true,
    },
    professionals: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    fees: {
      type: Number,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    hostName: {
      type: String,
      required: true,
    },
    hostEmail: {
      type: String,
      required: true,
    },
    participants: {
      type: Number,
      default: 0,
    },
  },
  {
    collection: "camps",
  }
);

const Camp = model("camps", campSchema);
module.exports = Camp;
