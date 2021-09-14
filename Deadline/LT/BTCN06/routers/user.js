const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "public/assets/images/" });
const User = require("../models/user");

router.get("/", function (req, res) {
  if (req.session.userId) {
    let success = false;
    res.render("user/profile", { success });
  } else {
    res.redirect("auth/login");
  }
});

router.post("/", upload.single("avatar"), function (req, res, next) {
  const { name, email, phone } = req.body;
  if (req.file) {
    const { filename } = req.file;
    res.locals.currentUser.avatar = filename;
  }

  User.findById(req.session.userId)
    .then(async function (user) {
      res.locals.currentUser.name = name;
      res.locals.currentUser.email = email;
      res.locals.currentUser.phone = phone;

      user = res.locals.currentUser;
      await user.save();

      let success = true;
      res.render("user/profile", { success });
    })
    .catch(next);
});

module.exports = router;
