const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.getProfile = async (req, res, next) => {
  try {
    if (!req.session.userId) {
      return res.redirect('/auth/login');
    }
    const name = res.locals.currentUser.displayName;
    return res.render('user/profile', { title: name, user: res.locals.currentUser });
  } catch (error) {
    next(error);
  }
};

exports.updateProfile = async (req, res, next) => {
  const { userId } = req.session;
  const { name, email, phone } = req.body;

  if (req.file) {
    const { filename } = req.file;
    res.locals.currentUser.avatar = 'http://127.0.0.1:5000/images/' + filename;
  }

  User.findById(userId)
    .then(async function (user) {
      res.locals.currentUser.displayName = name;
      res.locals.currentUser.email = email;
      res.locals.currentUser.phone = phone;

      user = res.locals.currentUser;
      await user.save();

      return res.redirect('/user/profile');
    })
    .catch(next);
};

exports.getChangePassword = async (req, res, next) => {
  try {
    if (!req.session.userId) {
      return res.redirect('/auth/login');
    }
    return res.render('user/changepassword', {
      title: 'Change Password',
      user: res.locals.currentUser,
    });
  } catch (error) {
    next(error);
  }
};

exports.postChangePassword = async (req, res, next) => {
  const { userId } = req.session;
  const { current_password, new_password, confirm_new_password } = req.body;

  User.findById(userId)
    .then(async function (user) {
      if (user && bcrypt.compareSync(current_password, user.password)) {
        if (new_password === confirm_new_password) {
          user.password = bcrypt.hashSync(new_password, 10);
          await user.save();
          return res.redirect('/user/profile');
        } else {
          return res.redirect('/user/changepassword');
        }
      } else {
        return res.redirect('/user/changepassword');
      }
    })
    .catch(next);
};
