const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const multer = require("multer");
const upload = multer({ dest: "public/assets/images/" });
const sendEmail = require("../routers/email");

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
  const { email, password } = req.body;
  User.findByEmail(email)
    .then(function (found) {
      if (
        found &&
        found.active === true &&
        bcrypt.compareSync(password, found.password)
      ) {
        req.session.userId = found.id;
        res.redirect("/");
      } else {
        res.redirect("/auth/login");
      }
    })
    .catch(next);
});

router.get("/register", function (req, res) {
  res.render("auth/register");
});

router.post("/register", upload.single("avatar"), async function (req, res) {
  const { name, password, confirmPassword, email, phone } = req.body;

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (user && user.active === true) {
    res.redirect("/auth/register");
  } else if (user && user.active === false) {
    let code = Math.floor(100000 + Math.random() * 900000);
    req.session.email = email;
    req.session.code = code;

    sendEmail.send(email, "Verify email", code.toString());

    res.redirect("/auth/email");
  } else if (password === confirmPassword) {
    const user = await User.create({
      name: name,
      phone: phone,
      email: email,
      password: bcrypt.hashSync(password, 10),
      role: "user",
      avatar: "profile.jpg",
      active: false,
    });

    if (req.file) {
      const { filename } = req.file;
      user.avatar = filename;
      await user.save();
    }

    let code = Math.floor(100000 + Math.random() * 900000);
    req.session.email = email;
    req.session.code = code;

    sendEmail.send(email, "Verify email", code.toString());

    res.redirect("/auth/email");
  } else {
    res.redirect("/auth/register");
  }
});

router.get("/email", function (req, res) {
  if (req.session.code) {
    const email = req.session.email;
    res.render("auth/email", { email });
  } else {
    res.redirect("/");
  }
});

router.post("/email", async function (req, res) {
  const { code } = req.body;
  const email = req.session.email;
  if (code == req.session.code) {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    user.active = true;
    await user.save();

    res.redirect("/auth/verify");
  } else {
    res.redirect("/auth/email");
  }
});

router.get("/verify", function (req, res) {
  if (req.session.code) {
    setTimeout(function () {
      delete req.session.code;
      delete req.session.email;
      res.render("auth/verify");
    }, 1000);
  } else {
    res.redirect("/");
  }
});

router.get("/logout", function (req, res) {
  delete req.session.userId;
  res.redirect("/");
});

module.exports = router;
