const News = require("../models/news");

exports.getAllNews = async (req, res, next) => {
  try {
    const news = await News.findAll({
      order: [["pubDate", "DESC"]],
    });
    res.render("news/index", { news });
  } catch (error) {
    next(error);
  }
};

exports.postNews = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
