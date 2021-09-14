const User = require("../models/user");

module.exports = function auth(req, res, next) {
  const { userId } = req.session;
  res.locals.currentUser = null;
  if (userId) {
    const user = User.findById(userId);
    if (user) {
      req.user = user;
      res.locals.currentUser = user;
    }
  }
  next();
};
