const express = require('express');
const bookController = require('../controllers/book.controller');
const upload = require('../middleware/uploadImage');

const router = express.Router();

router.route('/').post(upload.single('image'), bookController.createBook);

module.exports = router;
