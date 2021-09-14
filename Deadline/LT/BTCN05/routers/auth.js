const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.use(function (req, res, next) {
  res.locals.title = "Login";
  next();
});

router.get("/", function (req, res) {
  res.redirect("auth/login");
});

router.get("/login", function (req, res) {
  res.render("auth/login");
});

router.post("/login", function (req, res) {
  const { username, password } = req.body;
  const found = User.findByUsername(username);
  if (found && found.password == password) {
    req.session.userId = found.id;
    res.redirect("/");
  } else {
    res.redirect("/auth/login");
  }
});

router.get("/logout", function (req, res) {
  delete req.session.userId;
  res.redirect("/");
});

module.exports = router;
