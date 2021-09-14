const Book = require('../models/book');

exports.createBook = async (req, res, next) => {
  try {
    const data = req.file;
    return res.json(data);
  } catch (error) {
    next(error);
  }
};
