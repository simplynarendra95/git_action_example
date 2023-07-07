"use strict";

console.log("******************** server ");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// const routers = require("./routes/main.routes.js");
const user_routers = require("./routes/user.routes.js");
const address_routers = require("./routes/address.routes.js");

// app.use("/", routers);

// Initialization the express app.
const app = express();


// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set("views", "./views/users"); // this is used for user

// app.use(express.static('public'));
app.use("/public",express.static('public'));

app.use(cors());
// here we initializ the all middlewares 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// this is used whenever req.body data is coming..
app.use(express.json());

/**
 * Since it's only logger, so we can also use "dev" in 
 * produnction to log our requests.
 */
app.use(morgan("dev"));

// this is used whenever form data is coming.
app.use(express.urlencoded({ extended: true }));

// app.use("/api/post", postRoutes);
// app.use("/api/user", user_routers);
app.use("/", user_routers);
app.use("/api/address", address_routers);


module.exports = app;
