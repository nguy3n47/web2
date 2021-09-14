const express = require("express");
const router = express.Router();
const store = require("store");
const multer = require("multer");
const upload = multer({ dest: "public/assets/images/" });
const User = require("../models/user");
const Conference = require("../models/conference");
const { Op } = require("sequelize");

router.get("/", function (req, res) {
  res.redirect("/user/profile");
});

router.get("/profile", function (req, res) {
  if (req.session.userId) {
    let success = false;
    res.render("admin/profile", { success });
  } else {
    res.redirect("/auth/login");
  }
});

router.get("/joined", async function (req, res) {
  const user = await User.findOne({ where: { id: req.session.userId } });

  const joinedConferences = await user.getConferences();

  const arr = [];

  joinedConferences.forEach((item) => {
    arr.push(item.id);
  });

  const conferences =
    (await Conference.findAll({
      where: {
        [Op.not]: [{ id: arr }],
        status: false,
      },
      order: [["id", "DESC"]],
    })) || [];

  res.render("admin/joined", { joinedConferences, conferences });
});

router.post("/joined/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id: req.session.userId } });
    const conference = await Conference.findOne({
      where: {
        id: id,
      },
    });

    user.addConference(conference, {
      through: { status: true },
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/profile", upload.single("avatar"), function (req, res, next) {
  const { name, email, phone } = req.body;
  if (req.file) {
    const { filename } = req.file;
    res.locals.currentUser.avatar = filename;
  }

  User.findById(req.session.userId)
    .then(async function (user) {
      res.locals.currentUser.displayName = name;
      res.locals.currentUser.email = email;
      res.locals.currentUser.phone = phone;

      user = res.locals.currentUser;
      await user.save();

      let success = true;
      res.render("admin/profile", { success });
    })
    .catch(next);
});

module.exports = router;
