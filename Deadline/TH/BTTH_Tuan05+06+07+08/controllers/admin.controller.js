const User = require("../models/user");
const Conference = require("../models/conference");
const store = require("store");

exports.getUserbyConference = async (req, res, next) => {
  try {
    if (req.session.userId) {
      // const customers = req.session.userId
      //   ? await User.findAll({
      //       where: {
      //         role: "user",
      //       },
      //       order: [["id", "DESC"]],
      //     })
      //   : [];
      const conferences = await Conference.findAll({
        include: User,
        order: [["id", "DESC"]],
      });
      return res.render("admin/index", { conferences });
    } else {
      return res.redirect("auth/login");
    }
  } catch (error) {
    next(error);
  }
};

exports.showConfig = (req, res, next) => {
  try {
    if (req.session.userId) {
      let success = false;
      res.render("admin/config", { success });
    } else {
      res.redirect("auth/login");
    }
  } catch (error) {
    next(error);
  }
};

exports.submitConfig = (req, res, next) => {
  try {
    const { welcome, agree, not } = req.body;
    store.set("welcome", welcome);
    store.set("agree", agree);
    store.set("not", not);
    let success = true;
    res.render("admin/config", { success });
  } catch (error) {
    next(error);
  }
};
