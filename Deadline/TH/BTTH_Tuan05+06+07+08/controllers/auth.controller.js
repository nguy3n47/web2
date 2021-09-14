const User = require("../models/user");
const Conference = require("../models/conference");
const store = require("store");
const bcrypt = require("bcrypt");

exports.getLogin = (req, res, next) => {
  return res.render("auth/login");
};

exports.getLogout = (req, res, next) => {
  delete req.session.userId;
  return res.redirect("/");
};

exports.postLogin = (req, res, next) => {
  const { username, password } = req.body;
  User.findByUsername(username)
    .then(function (found) {
      if (found && bcrypt.compareSync(password, found.password)) {
        req.session.userId = found.id;
        return res.redirect("/");
      } else if (username) {
        User.findByEmail(username).then(function (found) {
          if (found && bcrypt.compareSync(password, found.password)) {
            req.session.userId = found.id;
            return res.redirect("/");
          } else {
            return res.redirect("/auth/login");
          }
        });
      }
    })
    .catch(next);
};

exports.getRegister = async (req, res, next) => {
  try {
    let conferences =
      (await Conference.findAll({
        where: {
          status: false,
        },
        order: [["id", "DESC"]],
      })) || [];
    return res.render("auth/register", { conferences });
  } catch (error) {
    next(error);
  }
};

exports.postRegister = async (req, res, next) => {
  try {
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

      return res.render("alerts/index", { user, agree, not });
    } else if (password !== confirmPassword) {
      user.destroy();
      return res.redirect("/auth/register");
    } else {
      const agree = store.get("agree")
        ? store.get("agree")
        : "Cảm ơn bạn đã đồng ý tham dự!";
      const not = store.get("not")
        ? store.get("not")
        : "Rất tiếc vì chưa có dịp phục vụ bạn!";

      return res.render("alerts/index", { user, agree, not });
    }
  } catch (error) {
    next(error);
  }
};
