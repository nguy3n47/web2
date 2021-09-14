const express = require("express");
const router = express.Router();
const store = require("store");

router.get("/", function (req, res) {
  if (req.session.userId) {
    let success = false;
    res.render("admin/config", { success });
  } else {
    res.redirect("auth/login");
  }
});

router.post("/", function (req, res) {
  const { welcome, agree, not } = req.body;
  store.set("welcome", welcome);
  store.set("agree", agree);
  store.set("not", not);
  let success = true;
  res.render("admin/config", { success });
});

module.exports = router;
