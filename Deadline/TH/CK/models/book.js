const db = require('../config/db');
const Sequelize = require('sequelize');

const Book = db.define('Book', {
  isbn: Sequelize.STRING,
  image: Sequelize.STRING,
  name: Sequelize.STRING,
  category: Sequelize.STRING,
  distributor: Sequelize.STRING,
});

module.exports = Book;
