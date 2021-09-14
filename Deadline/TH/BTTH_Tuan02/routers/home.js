const express = require("express");
const router = express.Router();
const store = require("store");

router.get("/", function (req, res) {
  let words = store.get("welcome")
    ? store.get("welcome")
    : "Hội nghị trực tuyến toàn quốc ngành Giáo dục năm 2021";
  res.render("home/index", {
    welcome: words,
  });
});

module.exports = router;
