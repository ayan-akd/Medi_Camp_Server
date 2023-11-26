const { Schema, model } = require("mongoose");

const registeredCampSchema = new Schema(
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
    },
    {
        collection: "registeredCamps",
    }
);
const registeredCamps = model("registeredCamps", registeredCampSchema);
module.exports = registeredCamps;