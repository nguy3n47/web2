exports.getHome = async (req, res, next) => {
  return res.render('home', { title: 'Home', user: res.locals.currentUser });
};
