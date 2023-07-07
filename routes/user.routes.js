"use strict";

const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/user.controllers.js");

router.get("/register", user_controller.userRegister);
router.post("/register", user_controller.createUser);
router.get("/getuser", user_controller.getUser);
router.get("/:id", user_controller.getUserByID);
router.put("/:id", user_controller.updateUserId);
router.delete("/:id", user_controller.deleteUserById);

module.exports = router;