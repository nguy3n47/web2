const User = require("../models/user");

exports.getProfile = (req, res, next) => {
  try {
    if (req.session.userId) {
      let success = false;
      return res.render("user/profile", { success });
    } else {
      return res.redirect("auth/login");
    }
  } catch (error) {
    next(error);
  }
};

exports.postProfile = (req, res, next) => {
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
      return res.render("user/profile", { success });
    })
    .catch(next);
};
