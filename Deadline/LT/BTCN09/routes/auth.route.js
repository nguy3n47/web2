require('dotenv').config();
const express = require('express');
const authController = require('../controllers/auth.controller');
const User = require('../models/user');
const passport = require('passport'),
  FacebookStrategy = require('passport-facebook').Strategy;

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: 'https://nguy3n-web2-oauth.herokuapp.com/auth/facebook/callback',
      profileFields: ['id', 'emails', 'name', 'displayName', 'photos'],
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOne({
        where: {
          facebookId: profile.id,
        },
      })
        .then(async function (user) {
          if (!user) {
            user = await User.create({
              displayName: profile.displayName,
              facebookId: profile.id,
              email: profile.emails[0].value,
              avatar: `http://graph.facebook.com/${profile.id}/picture`,
            });
          }
          user.accessToken = accessToken;
          await user.save();
          done(null, profile);
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (req, id, done) {
  User.findOne({ where: { facebookId: id } })
    .then(function (user) {
      req.session.userId = user.id;
      done(null, user);
    })
    .catch(done);
});

const router = express.Router();

router.route('/login').get(authController.getLogin);
router.route('/login').post(authController.postLogin);

router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }));
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
  })
);

router.route('/register').get(authController.getRegister);
router.route('/register').post(authController.postRegister);

router.route('/email').get(authController.getEmail);
router.route('/email').post(authController.postEmail);

router.route('/verify').get(authController.getVerify);

router.route('/logout').post(authController.postLogout);

module.exports = router;
