"use strict";

const express = require("express");
const router = express.Router();

const contact_controller = require("../controllers/contact.controllers.js");

router.post("/createaddress", contact_controller.createContact);
// router.get("/getuser", user_controller.getUser);
// router.get("/:id", user_controller.getUserByID);
// router.put("/:id", user_controller.updateUserId);
// router.delete("/:id", user_controller.deleteUserById);

module.exports = router;