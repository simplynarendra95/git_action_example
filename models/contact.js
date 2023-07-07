"use strict";

const mongoose = require("mongoose");
// const userSchema = require("./users.js");
const user = require("./users.js");

const contactSchema = new mongoose.Schema({
    line: {
        type: String
    },
    address: {
        type: String
    },
    pincode: {
        type: Number
    },
    // user: userSchema  // here we create a relationship using Embedding Concept 
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
}, {
    timestamps: true
});

const contact = mongoose.model("contact", contactSchema);

module.exports = contact;