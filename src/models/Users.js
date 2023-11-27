const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    gender : {
      type: String,
    },
    phone : {
      type: String,
    },
    address : {
      type: String,
    },
  },
  {
    collection: "users",
  }
);

const User = model("users", userSchema);
module.exports = User;
