const express = require("express");
const router = express.Router();
const store = require("store");
const Conference = require("../models/conference");
const UserConference = require("../models/userConference");

router.get("/", async function (req, res) {
  let conferences =
    (await Conference.findAll({ order: [["id", "DESC"]] })) || [];
  res.render("home/index", { conferences });
});

module.exports = router;
