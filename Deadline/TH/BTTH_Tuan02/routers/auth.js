const express = require("express");
const router = express.Router();
const User = require("../models/user");
const store = require("store");
const bcrypt = require("bcrypt");
const multer = require("multer");
const upload = multer({ dest: "public/assets/images/" });

router.use(function (req, res, next) {
  next();
});

router.get("/", function (req, res) {
  if (req.session.userId) {
    res.redirect("/");
  } else {
    res.redirect("auth/login");
  }
});

router.get("/login", function (req, res) {
  res.render("auth/login");
});

router.post("/login", function (req, res, next) {
  const { username, password } = req.body;
  User.findByUsername(username)
    .then(function (found) {
      if (found && bcrypt.compareSync(password, found.password)) {
        req.session.userId = found.id;
        res.redirect("/");
      } else if (username) {
        User.findByEmail(username).then(function (found) {
          if (found && bcrypt.compareSync(password, found.password)) {
            req.session.userId = found.id;
            res.redirect("/");
          } else {
            res.redirect("/auth/login");
          }
        });
      }
    })
    .catch(next);
});

router.get("/logout", function (req, res) {
  delete req.session.userId;
  res.redirect("/");
});

router.get("/register", function (req, res) {
  res.render("auth/register");
});

router.post("/register", upload.single("avatar"), async function (req, res) {
  const {
    name,
    password,
    confirmPassword,
    email,
    phone,
    checkedAttend,
    checkedCreateAccount,
  } = req.body;

  const user = await User.create({
    displayName: name,
    //username: Date.now(),
    phone: phone,
    email: email,
    attend: checkedAttend ? true : false,
    role: "user",
    avatar: "profile.jpg",
  });

  if (checkedCreateAccount && password === confirmPassword) {
    user.password = bcrypt.hashSync(password, 10);
    await user.save();
    if (req.file) {
      const { filename } = req.file;
      user.avatar = filename;
      await user.save();
    }

    const agree = store.get("agree")
      ? store.get("agree")
      : "C???m ??n b???n ???? ?????ng ?? tham d???!";
    const not = store.get("not")
      ? store.get("not")
      : "R???t ti???c v?? ch??a c?? d???p ph???c v??? b???n!";

    // store.each(function(value, key) {
    //   console.log(key, '==', value)
    // })

    res.render("alerts/index", { user, agree, not });
  } else {
    user.destroy();
    res.redirect("/auth/register");
  }
});

module.exports = router;
