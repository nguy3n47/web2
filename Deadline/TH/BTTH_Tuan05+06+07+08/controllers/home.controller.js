const Conference = require("../models/conference");

exports.getAllConference = async (req, res, next) => {
  try {
    let conferences =
      (await Conference.findAll({ order: [["id", "DESC"]] })) || [];
    return res.render("home/index", { conferences });
  } catch (error) {
    next(error);
  }
};
