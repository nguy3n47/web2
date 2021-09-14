const express = require('express');
const homeRoutes = require('./home.route');
const authRoutes = require('./auth.route');
const userRoutes = require('./user.route');

const router = express.Router();

router.get('/status', (req, res) => res.send('OK'));

router.use('/', homeRoutes);
router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('*', (req, res) => {
  res.status(404).render('error/404', { title: '404 Not Found', user: res.locals.currentUser });
});

module.exports = router;
