require('dotenv').config();

const bcrypt = require('bcrypt');
const User = require('../models/user');
const MailService = require('../services/mail');

exports.getLogin = async (req, res, next) => {
  return res.render('auth/login', { title: 'Login', user: res.locals.currentUser });
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  User.findByEmail(email)
    .then(function (found) {
      if (found && bcrypt.compareSync(password, found.password)) {
        req.session.userId = found.id;
        return res.redirect('/');
      } else {
        return res.redirect('/auth/login');
      }
    })
    .catch(next);
};

exports.postLogout = async (req, res, next) => {
  delete req.session.userId;
  req.logout();
  return res.redirect('/');
};

exports.getRegister = async (req, res, next) => {
  return res.render('auth/register', { title: 'Register', user: res.locals.currentUser });
};

exports.postRegister = async (req, res, next) => {
  try {
    const { name, email, phone, password, confirmPassword } = req.body;

    const userExists = await User.findOne({
      where: {
        email,
      },
    });

    if (userExists) return res.redirect('/auth/register');

    if (password !== confirmPassword) {
      return res.redirect('/auth/register');
    } else {
      const newUser = await User.create({
        displayName: name,
        username: '',
        phone: phone,
        email: email,
        password: bcrypt.hashSync(password, 10),
        avatar: 'http://127.0.0.1:5000/images/profile.jpg',
      });

      if (newUser) {
        const code = Math.floor(100000 + Math.random() * 900000);
        console.log(code);
        req.session.code = code.toString();
        req.session.email = newUser.email;
        await MailService.sendMail(
          newUser.email,
          'Verify your email address',
          'Code: ' + code.toString()
        );
        return res.redirect('/auth/email');
      } else {
        return res.redirect('/auth/register');
      }
    }
  } catch (error) {
    next(error);
  }
};

exports.getEmail = (req, res, next) => {
  try {
    if (req.session.code) {
      const email = req.session.email;
      return res.render('auth/email', { email, title: 'Email', user: res.locals.currentUser });
    } else {
      return res.redirect('/');
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

      return res.redirect('/auth/verify');
    } else {
      return res.redirect('/auth/email');
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
        return res.render('auth/verify', { title: 'Verify', user: res.locals.currentUser });
      }, 1000);
    } else {
      return res.redirect('/');
    }
  } catch (error) {
    next(error);
  }
};
