const express = require("express");
const router = express.Router();
const store = require("store");
const UserConference = require("../models/userConference");
const HomeController = require("../controllers/home.controller");

router.get("/", HomeController.getAllConference);

module.exports = router;
