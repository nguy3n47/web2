const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  let words = "Hello World!";
  res.render("BTCN02/index", {
    title: words,
    description:
      "Express.js, or simply Express, is a back end web application framework for Node.js",
  });
});

module.exports = router;
