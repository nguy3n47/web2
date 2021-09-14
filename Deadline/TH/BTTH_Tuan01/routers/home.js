const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  let words = "Nguyen Dev";
  res.render("home/index", {
    title: words,
    description: "FIT HCMUS",
  });
});

module.exports = router;
