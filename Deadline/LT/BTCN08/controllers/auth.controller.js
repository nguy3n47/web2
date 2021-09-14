const User = require("../models/user");
const bcrypt = require("bcrypt");
const sendEmail = require("../utils/email");

exports.getLogin = (req, res, next) => {
  try {
    return res.render("auth/login");
  } catch (error) {
    next(error);
  }
};

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;
  User.findByEmail(email)
    .then(function (found) {
      if (
        found &&
        found.active === true &&
        bcrypt.compareSync(password, found.password)
      ) {
        req.session.userId = found.id;
        res.redirect("/");
      } else {
        res.redirect("/auth/login");
      }
    })
    .catch(next);
};

exports.getRegister = (req, res, next) => {
  try {
    return res.render("auth/register");
  } catch (error) {
    next(error);
  }
};

exports.postRegister = async (req, res, next) => {
  try {
    const { name, password, confirmPassword, email, phone } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user && user.active === true) {
      return res.redirect("/auth/register");
    } else if (user && user.active === false) {
      let code = Math.floor(100000 + Math.random() * 900000);
      req.session.email = email;
      req.session.code = code;

      sendEmail.send(email, "Verify email", code.toString(), "");

      res.redirect("/auth/email");
    } else if (password === confirmPassword) {
      const user = await User.create({
        name: name,
        phone: phone,
        email: email,
        password: bcrypt.hashSync(password, 10),
        role: "user",
        avatar: "profile.jpg",
        active: false,
      });

      if (req.file) {
        const { filename } = req.file;
        user.avatar = filename;
        await user.save();
      }

      let code = Math.floor(100000 + Math.random() * 900000);
      req.session.email = email;
      req.session.code = code;

      sendEmail.send(email, "Verify email", code.toString(), "");

      return res.redirect("/auth/email");
    } else {
      return res.redirect("/auth/register");
    }
  } catch (error) {
    next(error);
  }
};

exports.getEmail = (req, res, next) => {
  try {
    if (req.session.code) {
      const email = req.session.email;
      return res.render("auth/email", { email });
    } else {
      return res.redirect("/");
    }
  } catch (error) {
    next(error);
  }
};

exports.postEmail = async (req, res, next) => {
  try {
    const { code } = req.body;
    const email = req.session.email;
    if (code == req.session.code) {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      user.active = true;
      await user.save();

      return res.redirect("/auth/verify");
    } else {
      return res.redirect("/auth/email");
    }
  } catch (error) {
    next(error);
  }
};

exports.getVerify = (req, res, next) => {
  try {
    if (req.session.code) {
      setTimeout(function () {
        delete req.session.code;
        delete req.session.email;
        return res.render("auth/verify");
      }, 1000);
    } else {
      return res.redirect("/");
    }
  } catch (error) {
    next(error);
  }
};

exports.getLogout = (req, res, next) => {
  try {
    delete req.session.userId;
    return res.redirect("/");
  } catch (error) {
    next(error);
  }
};
