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
    },
    gender: {
      type: String,
    },
    fee: {
      type: Number,
    },
    phone: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
    },
    qualification: {
      type: String,
    },
    address: {
      type: String,
    },
    problems: {
      type: String,
    },
    emergency: {
      type: String,
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
    role : {
      type: String,
      required: true,
    },
  },
  {
    collection: "growingList",
  }
);

const growingLists = model("growingList", growingListSchema);

module.exports = growingLists;