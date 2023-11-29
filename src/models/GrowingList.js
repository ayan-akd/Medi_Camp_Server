const { Schema, model } = require("mongoose");

const growingListSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    problems: {
      type: String,
      required: true,
    },
    emergency: {
      type: String,
      required: true,
    },
    hostEmail: {
      type: String,
      required: true,
    },
    campId: {
      type: String,
      required: true,
    },
    payment: {
      type: String,
      required: true,
    },
    confirmation: {
      type: String,
      required: true,
    },
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
    txId: {
      type: String,
    },
    rating: {
      type: Number,
    },
    review: {
      type: String,
    },
    reviewPhoto: {
      type: String,
    },
  },
  {
    collection: "growingList",
  }
);

const growingLists = model("growingList", growingListSchema);

module.exports = growingLists;