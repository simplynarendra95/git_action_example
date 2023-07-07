"use strict";

const express = require("express");
const app = express();

const user = require("./user.routes.js");
const address = require("./address.routes.js");

app.use("/api/v1/user", user);
// app.use("/api/v1/address", address);


module.exports = main;