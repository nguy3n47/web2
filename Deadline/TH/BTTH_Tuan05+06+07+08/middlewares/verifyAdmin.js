const User = require("../models/user");

module.exports = function verifyAdmin(req, res, next) {
  const { userId } = req.session;
  if (userId) {
    User.findById(userId)
      .then(function (user) {
        if (user.role !== "admin") {
          res.redirect("/");
        }
        next();
      })
      .catch(next);
  } else {
    next();
  }
};
