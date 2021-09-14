const User = require("../models/user");
const Conference = require("../models/conference");
const { Op } = require("sequelize");

exports.getProfile = (req, res, next) => {
  try {
    if (req.session.userId) {
      let success = false;
      return res.render("admin/profile", { success });
    } else {
      return res.redirect("/auth/login");
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
      res.locals.currentUser.displayName = name;
      res.locals.currentUser.email = email;
      res.locals.currentUser.phone = phone;

      user = res.locals.currentUser;
      await user.save();

      let success = true;
      return res.render("admin/profile", { success });
    })
    .catch(next);
};

exports.getJoined = async (req, res, next) => {
  try {
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

    return res.render("admin/joined", { joinedConferences, conferences });
  } catch (error) {
    next(error);
  }
};

exports.postJoinedbyId = async (req, res, next) => {
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

    return res.json({ success: true });
  } catch (error) {
    next(error);
  }
};
