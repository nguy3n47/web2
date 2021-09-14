const { DataTypes } = require("sequelize");
const db = require("../config/db");

const News = db.define("News", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  pubDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

News.findById = async function (id) {
  return News.findByPk(id);
};

module.exports = News;
