const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Conference = require("../models/conference");
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

router.get("/register", async function (req, res) {
  let conferences =
    (await Conference.findAll({
      where: {
        status: false,
      },
      order: [["id", "DESC"]],
    })) || [];
  res.render("auth/register", { conferences });
});

router.post("/register", upload.single("avatar"), async function (req, res) {
  const {
    name,
    password,
    confirmPassword,
    email,
    phone,
    checkedAttend,
    conferenceId,
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

  const conference = await Conference.findOne({
    where: {
      id: conferenceId,
    },
  });

  if (checkedAttend) {
    conference.addUser(user, {
      through: { status: checkedAttend ? true : false },
    });
  }

  if (checkedCreateAccount && password === confirmPassword) {
    user.password = bcrypt.hashSync(password, 10);
    await user.save();
    if (req.file) {
      const { filename } = req.file;
      user.avatar = filename;
      conference.addUser(user, {
        through: { status: checkedAttend ? true : false },
      });
      await user.save();
    }

    const agree = store.get("agree")
      ? store.get("agree")
      : "Cảm ơn bạn đã đồng ý tham dự!";
    const not = store.get("not")
      ? store.get("not")
      : "Rất tiếc vì chưa có dịp phục vụ bạn!";

    // store.each(function(value, key) {
    //   console.log(key, '==', value)
    // })

    res.render("alerts/index", { user, agree, not });
  } else if (password !== confirmPassword) {
    user.destroy();
    res.redirect("/auth/register");
  } else {
    const agree = store.get("agree")
      ? store.get("agree")
      : "Cảm ơn bạn đã đồng ý tham dự!";
    const not = store.get("not")
      ? store.get("not")
      : "Rất tiếc vì chưa có dịp phục vụ bạn!";

    res.render("alerts/index", { user, agree, not });
  }
});

module.exports = router;
