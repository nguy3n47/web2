const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Conference = require("../models/conference");

router.get("/", async function (req, res) {
  if (req.session.userId) {
    // const customers = req.session.userId
    //   ? await User.findAll({
    //       where: {
    //         role: "user",
    //       },
    //       order: [["id", "DESC"]],
    //     })
    //   : [];
    const conferences = await Conference.findAll({ include: User });
    res.render("admin/index", { conferences });
  } else {
    res.redirect("auth/login");
  }
});

module.exports = router;
