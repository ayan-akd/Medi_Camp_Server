const { Schema, model } = require("mongoose");

const upcomingCampSchema = new Schema(
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
    intParticipants: {
      type: Number,
      default: 0,
    },
    intPro: {
      type: Number,
      default: 0,
    },
  },
  {
    collection: "upcomingCamps",
  }
);

const upcomingCamps = model("upcomingCamps", upcomingCampSchema);
module.exports = upcomingCamps;
