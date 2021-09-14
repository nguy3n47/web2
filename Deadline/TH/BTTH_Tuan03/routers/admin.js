const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async function (req, res) {
  if (req.session.userId) {
    let customers = req.session.userId
      ? await User.findAll({
          where: {
            role: "user",
          },
          order: [["id", "DESC"]],
        })
      : [];
    res.render("admin/index", { customers });
  } else {
    res.redirect("auth/login");
  }
});

module.exports = router;
