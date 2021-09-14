const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.route('/login').get(authController.getLogin);
router.route('/login').post(authController.postLogin);

router.route('/register').get(authController.getRegister);
router.route('/register').post(authController.postRegister);

router.route('/email').get(authController.getEmail);
router.route('/email').post(authController.postEmail);

router.route('/verify').get(authController.getVerify);

router.route('/logout').post(authController.postLogout);

module.exports = router;
