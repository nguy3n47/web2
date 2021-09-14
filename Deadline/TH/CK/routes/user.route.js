const express = require('express');
const userController = require('../controllers/user.controller');
const upload = require('../middleware/uploadImage');

const router = express.Router();

router.route('/profile').get(userController.getProfile);
router.route('/profile').post(upload.single('avatar'), userController.updateProfile);
router.route('/changepassword').get(userController.getChangePassword);
router.route('/changepassword').post(userController.postChangePassword);
module.exports = router;
